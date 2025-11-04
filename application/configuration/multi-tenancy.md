# Multi-Tenancy

Multi-tenancy is supported from version 4.4.0 onwards.

This allows hosting multiple independent Chevereto instances (tenants) within a single Chevereto installation. Each tenant can have its own configuration, users, media, and settings, while sharing the same application codebase. It enables to run multiple Chevereto sites on a shared infrastructure, simplifying maintenance and reducing resource consumption.

## System overview

In a multi-tenant Chevereto setup, the application is configured to recognize and serve multiple tenants. Each tenant is identified by a unique identifier (tenant ID) and bound to a hostname. Chevereto uses the `tenants` and `tenants_plans` database tables to manage tenant-specific data, on runtime the application determines the active tenant based on the incoming request's hostname and applies the corresponding configurations.

The database is the source of truth for tenant information, including their limits and environment settings. The application caches this data on memory and it provides a [command line interface](../../application/reference/cli.md#tenants-cli) for interacting with it.

By design, this system mandatory **requires encryption** as it needs to cipher the data stored under the `env` columns in the database tables.

Resource sharing is constrained by the following design decisions that you should consider when planning your multi-tenant setup:

- Database uses table prefixing to isolate tenant data.
- Caching uses key prefixing to isolate tenant cache entries.
- No built-in local storage, tenants control their own "Site storage" and "Upload storage" from the application settings.
- Session supports only Redis as backend.
- Tenant ID must be unique and is limited to 16 characters.
- Tenant hostname must be unique and is limited to 255 characters.

## Enabling multi-tenancy

To enable multi-tenancy, set the following environment variables:

```plain
CHEVERETO_ENABLE_TENANTS=1
CHEVERETO_ENCRYPTION_KEY=your_encryption_key
```

## Managing tenant plans

Tenant plans define the limits and environment available for tenants, similar to a template. When a tenant is bound to a plan it inherits its limits and environment settings. However, keep in mind that these can be overridden on a per-tenant basis.

Use `limits` to define resource constraints. Use `env` to set environment variables (safe encrypted).

### Adding a tenant plan

Use the [plan:add](../../application/reference/cli.md#add-tenant-plan) command to create a new tenant plan. You must pass the plan ID and its name, limits and environment are optional. Use JSON format for `limits` and `env`.

```sh
app/bin/tenants -C plan:add \
    --id 1 \
    --name "Basic Plan" \
    --limits '{"CHEVERETO_MAX_TAGS":"10000"}' \
    --env '{"CHEVERETO_CACHE_TIME_MICRO":"120"}'
```

For the example above, the created plan will have ID `1`, name `Basic Plan`, a limit of maximum `10000` tags and a cache time of `120` seconds.

### Listing tenant plans

Use the [plan:list](../../application/reference/cli.md#list-tenant-plans) command to list all tenant plans.

```sh
app/bin/tenants -C plan:list
```

### Deleting a tenant plan

Use the [plan:delete](../../application/reference/cli.md#delete-tenant-plan) command to delete a tenant plan by its ID. Affected tenants will no longer be associated with that plan, losing any limits and environment settings inherited from it. The system will re-cache the affected tenants automatically.

```sh
app/bin/tenants -C plan:delete --id 1
```

## Managing tenants

Tenants represent individual Chevereto instances within the multi-tenant setup. Each tenant is associated with a unique hostname and can have its own configuration, users, media, and settings.

Use `limits` to define resource constraints and `env` (encrypted) to set environment variables for tenants, it will override any plan settings.

### Adding a tenant

Use the [add](../../application/reference/cli.md#add-tenant) command to create a new tenant. You must pass the tenant ID, hostname, and enabled status. Plan ID, limits, and environment are optional. Use JSON format for `limits` and `env`.

```sh
app/bin/tenants -C add \
    --id 1 \
    --hostname tenant1.example.com \
    --is_enabled 1 \
    --plan_id 1 \
    --env '{"CHEVERETO_CACHE_TIME_MICRO":"90"}'
```

For the example above, the created tenant will have ID `1`, hostname `tenant1.example.com`, enabled status `1`, associated with plan ID `1`, a limit of maximum `5000` albums and a cache time of `90` seconds. Note how the tenant overrides the cache time defined in its plan.

### Editing a tenant

Use the [edit](../../application/reference/cli.md#edit-tenant) command to modify an existing tenant. You can update its hostname, enabled status, plan ID, limits, and environment. Use JSON format for `limits` and `env`.

```sh
app/bin/tenants -C edit \
    --id 1 \
    --is_enabled 0
```

### Deleting a tenant

Use the [delete](../../application/reference/cli.md#delete-tenant) command to remove a tenant by its ID.

```sh
app/bin/tenants -C delete --id 1
```

### Caching tenants data

Use the [cache](../../application/reference/cli.md#cache-tenants-data) command to generate the cache for tenants. This command should be used when needing to refresh the entire tenants data cache.

```sh
app/bin/tenants -C cache
```

## Application CLI and multi-tenancy

When running Chevereto in multi-tenant mode, you must pas the target tenant for CLI commands by setting the `CHEVERETO_ID` environment variable to the desired tenant ID.

```sh
CHEVERETO_ID=abc app/bin/cli -C <command> <options>
```
