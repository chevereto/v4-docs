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
- Sessions: only Redis is supported as backend.
- Tenant ID: unique, up to 16 characters.
- Tenant hostname: unique, up to 255 characters.

Once a hostname is resolved to a tenant, the application behaves as if it were a standalone Chevereto instance with its own configuration.

## Enabling multitenancy

To enable tenants, set the following environment variables. You must provide an [encryption key](../reference/encryption.md#key) for securing tenant environment data.

```plain
CHEVERETO_ENABLE_TENANTS=1
CHEVERETO_ENCRYPTION_KEY=your_encryption_key
CHEVERETO_PROVIDER_NAME=your_provider_name

If you want to run Chevereto in SaaS context, also set:

```plain
CHEVERETO_CONTEXT=saas
```

### Environment variables

Use plans and tenant configurations to define resource limits and environment variables on a per-tenant basis. Use `CHEVERETO_TENANT_ENFORCED` to define a JSON object with environment variables that will be late enforced (overridden) on runtime to all tenants.

```plain
CHEVERETO_TENANT_ENFORCED='{"CHEVERETO_MAX_UPLOAD_SIZE":"20M"}'
```

### Initializing the multi-tenant system

Then, initialize the multi-tenant database system:

```sh
app/bin/tenants -C init
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

Use [plan:edit](../../application/reference/cli.md#edit-tenant-plan) to change the name, limits, or environment of an existing plan. Affected tenants will inherited the updated plan settings; the system re-caches them automatically.

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

Use [plan:delete](../../application/reference/cli.md#delete-tenant-plan) by plan ID. Affected tenants will lose the inherited plan settings; the system re-caches them automatically.

```sh
app/bin/tenants -C plan:delete --id 1
```

## Managing tenants

A tenant represents an individual Chevereto instance within the multi-tenant setup. Each tenant has a unique hostname and can override its plan’s limits and environment.

- Use `limits` for resource constraints.
- Use `env` for environment variables (encrypted). Tenant `env` overrides plan `env`.

### Adding a tenant

Use [add](../../application/reference/cli.md#add-tenant). Provide tenant ID, hostname, and enabled status. `plan_id`, `limits`, and `env` are optional (JSON format).

```sh
app/bin/tenants -C add \
    --id 1 \
    --hostname tenant1.example.com \
    --is_enabled 1 \
    --plan_id 1 \
    --env '{"CHEVERETO_CACHE_TIME_MICRO":"90"}'
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

## Application CLI

When running Chevereto in multi-tenant mode, pass the target tenant via the `CHEVERETO_TENANT` environment variable.

```sh
CHEVERETO_TENANT=abc app/bin/cli -C <command> <options>
```
