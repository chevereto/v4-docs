# Multitenancy

[Multitenancy](https://en.wikipedia.org/wiki/Multitenancy) is supported as of version 4.4.0.

It allows hosting multiple isolated Chevereto instances (tenants) in a single installation. Each tenant has its own configuration, users, media, and settings, while sharing the same application codebase. This reduces maintenance and resource consumption.

## System overview

In a multi-tenant setup, Chevereto recognizes and serves multiple tenants. Each tenant:

- Is identified by a unique tenant ID.
- Is bound to a hostname.
- Is resolved at runtime from the incoming request’s hostname.

Tenant metadata is stored in the `tenants` and `tenants_plans` database tables. The database is the source of truth for tenant limits and environment settings. The application caches this data in memory and provides a [command line interface](../../application/reference/cli.md#tenants-cli) to manage it.

Data stored under `env` columns is encrypted.

Resource sharing and isolation:

- Database: table prefixing per tenant.
- Cache: key prefixing per tenant.
- Storage: tenants configure their own “Site storage” and “Upload storage” in application settings.
- Sessions: only Redis is supported as the backend.
- Tenant ID: unique, up to 16 characters.
- Tenant hostname: unique, up to 255 characters.

Once a hostname is resolved to a tenant, the application behaves as if it were a standalone Chevereto instance with its own configuration.

## Enabling multitenancy

To enable tenants, set the following environment variables. You must provide an [encryption key](../reference/encryption.md#key) for securing tenant environment data.

```plain
CHEVERETO_ENABLE_TENANTS=1
CHEVERETO_ENCRYPTION_KEY=your_encryption_key
CHEVERETO_PROVIDER_NAME=your_provider_name
CHEVERETO_PROVIDER_URL=your_provider_url
```

### Tenants key pair

If you need to use the [Tenants API](../../api/4/tenants.md), you will require a key pair. You must set a Tenants public key for verifying signed requests.

```plain
CHEVERETO_TENANTS_PUBLIC_KEY=your_tenants_public_key
```

To generate a key pair, you can use `ssh-keygen`:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com" -f tenants_key
```

### SaaS context

The Chevereto SaaS context is a special mode for service providers offering Chevereto as a service to multiple customers. When running Chevereto in a SaaS context, the system alters functionality and display that otherwise would allow tenants to interfere with each other or the host system. In particular, it affects the following features:

- Self-upgrade capabilities
- HTTP cron trigger
- License key management
- System information display (database version, PHP info, FFmpeg, etc.)

To run Chevereto in a SaaS context set:

```plain
CHEVERETO_CONTEXT=saas
```

### Environment variables

Define resource limits and environment variables per tenant via plans and tenant configurations. To enforce overrides at runtime for all tenants, set `CHEVERETO_TENANT_ENFORCED` to a JSON object.

Precedence (highest to lowest):

- `CHEVERETO_TENANT_ENFORCED` (runtime enforced, not stored)
- Tenant `env` (encrypted at rest), `limits`
- Plan `env` (encrypted at rest), `limits`
- Global defaults/environment

```plain
CHEVERETO_TENANT_ENFORCED='{"CHEVERETO_MAX_UPLOAD_SIZE":"20M"}'
```

**Tip:** When using yaml you can define `CHEVERETO_TENANT_ENFORCED` multi-line as:

```yaml
CHEVERETO_TENANT_ENFORCED: >
  {
      "CHEVERETO_CONTEXT":"saas",
      "CHEVERETO_ENABLE_BULK_IMPORTER":"0",
      "CHEVERETO_ENABLE_CDN":"0",
      "CHEVERETO_ENABLE_DEBUG":"0",
      "CHEVERETO_ENABLE_LOCAL_STORAGE":"0",
      "CHEVERETO_ENABLE_NEWS_CHECK":"1",
      "CHEVERETO_ENABLE_PHP_PAGES":"0",
      "CHEVERETO_ENABLE_POWERED_BY_SETTING":"1",
      "CHEVERETO_ENABLE_FORCE_POWERED_BY_FOOTER":"0",
      "CHEVERETO_ENABLE_PUP_CUSTOM_URL":"0",
      "CHEVERETO_ENABLE_UPDATE_CHECK":"0",
      "CHEVERETO_ENABLE_UPDATE_HTTP":"0",
      "CHEVERETO_ENABLE_UPLOAD_URL":"0",
      "CHEVERETO_ENABLE_SERVICE_MODERATECONTENT":"0",
      "CHEVERETO_MAX_LISTING_ITEMS_PER_PAGE":"48",
      "CHEVERETO_MAX_CACHE_TTL":"3600",
      "CHEVERETO_MIN_STORAGES_ACTIVE":"1"
  }
```

### Initializing the multi-tenant system

Initialize the multi-tenant database (run once after enabling multitenancy):

```sh
app/bin/tenants -C init
```

## Tenants API keys

Use [api:key:create](../../application/reference/cli.md#create-tenants-api-key) to create API keys for accessing the Tenants API.

```sh
app/bin/tenants -C api:key:create \
    --id 1 \
    --description "My Key" \
    --expires "2025-12-31 23:59:59"
```

Use [api:key:delete](../../application/reference/cli.md#delete-tenants-api-key) to delete an existing API key by its ID.

```sh
app/bin/tenants -C api:key:delete --id 1
```

## Managing tenant plans

Tenant plans define default limits and environment variables, similar to a template. When a tenant is assigned to a plan, it inherits the plan’s limits and environment, which the tenant can still override.

- Use `limits` to define resource constraints.
- Use `env` to set environment variables (values are stored encrypted).

### Adding a tenant plan

Use [plan:add](../../application/reference/cli.md#add-tenant-plan). Pass the plan ID and name; `limits` and `env` are optional (JSON format).

```sh
app/bin/tenants -C plan:add \
    --id 1 \
    --name "Basic Plan" \
    --limits '{"CHEVERETO_MAX_TAGS":"10000"}' \
    --env '{"CHEVERETO_CACHE_TIME_MICRO":"120"}'
```

This creates plan `1` named “Basic Plan” with a maximum of `10000` tags and a cache time of `120` seconds.

### Editing a tenant plan

Use [plan:edit](../../application/reference/cli.md#edit-tenant-plan) to change the name, limits, or environment of an existing plan. Affected tenants will inherit the updated plan settings; the settings are re-cached automatically.

```sh
app/bin/tenants -C plan:edit \
    --id 1 \
    --name "Updated Basic Plan" \
    --limits '{"CHEVERETO_MAX_TAGS":"15000"}'
```

### Listing tenant plans

Use [plan:list](../../application/reference/cli.md#list-tenant-plans):

```sh
app/bin/tenants -C plan:list
```

### Deleting a tenant plan

Use [plan:delete](../../application/reference/cli.md#delete-tenant-plan) by plan ID. Affected tenants will lose the inherited plan settings; the settings are re-cached automatically.

```sh
app/bin/tenants -C plan:delete --id 1
```

## Managing tenants

A tenant represents an individual Chevereto instance within the multi-tenant setup. Each tenant has a unique hostname and can override its plan’s limits and environment.

- Use `limits` for resource constraints.
- Use `env` for environment variables (encrypted). Tenant `env` overrides plan `env`.

### Adding a tenant

Use [add](../../application/reference/cli.md#add-tenant). Provide tenant ID, hostname, and enabled status. `plan_id`, `limits`, and `env` are optional (JSON format).

**Note:** It is **recommended** to set a unique `CHEVERETO_ENCRYPTION_KEY` per tenant for enhanced security.

```sh
app/bin/tenants -C add \
    --id 1 \
    --hostname tenant1.example.com \
    --is_enabled 1 \
    --plan_id 1 \
    --env '{"CHEVERETO_ENCRYPTION_KEY":"base64 encoded (size 32)"}'
```

This creates tenant `1` at `tenant1.example.com`, enabled, associated with plan `1`, and overriding the plan’s cache time to `90` seconds.

### Editing a tenant

Use [edit](../../application/reference/cli.md#edit-tenant) to change hostname, enabled status, plan, limits, or environment.

```sh
app/bin/tenants -C edit \
    --id 1 \
    --is_enabled 0
```

### Deleting a tenant

Use [delete](../../application/reference/cli.md#delete-tenant) by tenant ID:

```sh
app/bin/tenants -C delete --id 1
app/bin/tenants -C delete --id 1 --drop-tables
```

When passing `--drop-tables`, the tenant’s database tables are also removed.

### Caching tenant data

Use [cache](../../application/reference/cli.md#cache-tenants-data) to regenerate the entire tenant data cache:

```sh
app/bin/tenants -C cache
```

## Running jobs worker

Use [jobs:worker](../../application/reference/cli.md#tenants-jobs-worker) to run the jobs worker in multi-tenant mode.

To run the worker for all tenants:

```sh
app/bin/tenants -C jobs:worker
```

To run the worker for a specific tenant:

```sh
app/bin/tenants -C jobs:worker --id 1
```

You can also run each tenant job by passing the tenant ID to the [CRON command](../../application/reference/cli.md#cron):

```sh
CHEVERETO_TENANT=1 app/bin/cli -C cron
```

## Updating tenants

When updating Chevereto, run the [update](../../application/reference/cli.md#tenants-update) command to apply database migrations.

To apply updates to all tenants:

```sh
app/bin/tenants -C update
```

To update a specific tenant:

```sh
app/bin/tenants -C update --id 1
```

You can also update each tenant by passing the tenant ID to the [update command](../../application/reference/cli.md#update):

```sh
CHEVERETO_TENANT=1 app/bin/cli -C update
```

## Application CLI

Access the application CLI of each tenant by passing the target tenant via the `CHEVERETO_TENANT` environment variable.

```sh
CHEVERETO_TENANT=abc app/bin/cli -C <command> <options>
```
