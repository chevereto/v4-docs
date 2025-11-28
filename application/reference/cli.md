# CLI

## Application CLI

`app/bin/cli`

This command line interface enables to perform a variety of application tasks. It can be used like this:

```sh
app/bin/cli -C <command> <options>
CHEVERETO_TENANT=abc app/bin/cli -C <command> <options> # When using multi-tenant mode
```

Where:

* `app/bin/cli` path to the Chevereto console file
* `<command>` task to run
* `<options>` options for command
* `CHEVERETO_TENANT` environment variable to specify the target tenant when using multi-tenant mode

Command invocation vary depending on the system context, here samples for Debian and Docker:

<code-group>
<code-block title="Debian">
```sh
sudo -u www-data app/bin/cli -C <command> <options>
```
</code-block>

<code-block title="Docker">
```sh
docker exec -it --user www-data \
    container_name \
    app/bin/cli -C <command> <options>
```
</code-block>
</code-group>

### Bulk importer

The `bulk-importer` command process files for [Bulk importer](https://v4-admin.chevereto.com/dashboard/bulk-importer.html).

```sh
app/bin/cli -C bulk-importer
```

### Cache flush

The `cache-flush` command clears the application cache and outputs the status of the operation for each key.

```sh
app/bin/cli -C cache-flush
```

### Cache view

The `cache-view` command displays information about the application cache, including the cache key, TTL (in seconds), and memory usage.

```sh
app/bin/cli -C cache-view
```

### Cron

The `cron` command runs the background jobs required by Chevereto.

```sh
app/bin/cli -C cron
```

### Encrypt secrets

The `encrypt-secrets` command [encrypts](encryption.md) the application plain text secrets (not already encrypted) in the database.

```sh
app/bin/cli -C encrypt-secrets
```

If the application secrets are **already encrypted** (stored as cipher text) it will require to pass the key for decrypting the existing secrets. Use the `-k` argument to indicate the key for the already stored cipher texts:

```sh
app/bin/cli -C encrypt-secrets -k key_for_stored_data
```

### Decrypt secrets

The `decrypt-secrets` command decrypts the application secrets stored as cipher text in the database.

```sh
app/bin/cli -C decrypt-secrets
```

After running the above command set `CHEVERETO_ENCRYPTION_KEY` to **empty string** to disable encryption.

### Htaccess

#### Htaccess checksum

The `htaccess-checksum` command generates safe `.htaccess` for Chevereto folders.

```sh
app/bin/cli -C htaccess-checksum
```

#### Htaccess enforce

The `htaccess-enforce` command checks for any alteration on the `.htaccess` files and reverts them to the defaults included by Chevereto.

```sh
app/bin/cli -C htaccess-enforce
```

### Install

The `install` command installs Chevereto. It requires to pass the admin user details.

To install Chevereto for user "rodolfo" with password "myPassword":

```sh
app/bin/cli -C install \
    -u rodolfo \
    -e rodolfo@chevereto.loc \
    -x myPassword
```

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |

### Langs

The `langs` command generates the cache for language translations. The command outputs the list of languages processed.

```sh
app/bin/cli -C langs
```

### Stats

The `stats` command outputs Chevereto application stats. Pass `--format json` to output the stats as JSON.

```sh
app/bin/cli -C stats
app/bin/cli -C stats --format json
```

### Stats rebuild

The `stats-rebuild` command rebuilds the Chevereto application stats.

```sh
app/bin/cli -C stats-rebuild
```

### Password reset

The `password-reset` command generates and assign a new password for the target username. The command outputs the new password.

To reset the password for user "rodolfo":

```sh
app/bin/cli -C password-reset -u rodolfo
```

### Setting get

The `setting-get` command retrieves the target database setting key value.

To get the value for "chevereto_version_installed":

```sh
app/bin/cli -C setting-get -k chevereto_version_installed
```

### Setting update

The `setting-update` command updates the target database setting key value. It outputs the value after update.

To update the value for "maintenance":

```sh
app/bin/cli -C setting-update -k maintenance -v true
```

### Database migrate

The `database-migrate` command migrates the Chevereto database schema to the latest version.

```sh
app/bin/cli -C database-migrate
```

### Version

The `version` command outputs the Chevereto application filesystem version.

```sh
app/bin/cli -C version
```

### Js

The `js` command generates the cache for JavaScript files. The command outputs the list of JavaScript files processed.

```sh
app/bin/cli -C js
```

## REPL CLI

`app/bin/repl`

This command line interface enables to interact with the Chevereto application using a Read-Eval-Print Loop (REPL). It can be used like this:

```sh
app/bin/repl
```

Refer to [REPL documentation](../../developer/how-to/repl.md).

## Tenants CLI

`app/bin/tenants`

This command line interface enables to manage tenants in the Chevereto infrastructure. It can be used like this:

```sh
app/bin/tenants -C <command> <options>
```

### Initialize tenants

The `init` command initializes the tenants system in Chevereto. It sets up the necessary database tables and configurations to support multitenancy.

```sh
app/bin/tenants -C init
```

### Create Tenants API key

The `api:key:create` command creates a new Tenants API key in the Chevereto infrastructure.

```sh
app/bin/tenants -C api:key:create \
    --name my_key \
    --expires "2025-12-31 23:59:59"
```

| Option  | Description                        |
| ------- | ---------------------------------- |
| name    | (optional) API key name            |
| expires | (optional) UTC Expiration datetime |

### Verify Tenants API key

The `api:key:verify` command verifies an existing Tenants API key by its key value.

```sh
app/bin/tenants -C api:key:verify --key chv_1_1234567890
```

### Delete Tenants API key

The `api:key:delete` command deletes an existing Tenants API key by its ID and/or name.

```sh
app/bin/tenants -C api:key:delete --id 1
app/bin/tenants -C api:key:delete --name my_key
```

| Option | Description  |
| ------ | ------------ |
| id     | API key ID   |
| name   | API key name |

### Create tenant

The `create` command creates a new tenant in the Chevereto infrastructure.

```sh
app/bin/tenants -C create \
    --id 1 \
    --hostname tenant1.example.com \
    --is_enabled 1 \
    --plan_id 1 \
    --limits '{}' \
    --env '{}'
```

| Option     | Description                        |
| ---------- | ---------------------------------- |
| id         | Tenant ID                          |
| hostname   | Tenant hostname                    |
| is_enabled | Tenant enabled status              |
| plan_id    | (optional) Tenant plan ID          |
| limits     | (optional) Tenant limits JSON      |
| env        | (optional) Tenant environment JSON |

### Get tenant

The `get` command retrieves an existing tenant in the Chevereto infrastructure.

```sh
app/bin/tenants -C get --id 1
```

| Option | Description |
| ------ | ----------- |
| id     | Tenant ID   |

### List tenants

The `list` command outputs the list of tenants in the Chevereto infrastructure.

```sh
app/bin/tenants -C list
```

### Edit tenant

The `edit` command modifies an existing tenant in the Chevereto infrastructure.

```sh
app/bin/tenants -C edit \
    --id 1 \
    --is_enabled 0
```

| Option     | Description                        |
| ---------- | ---------------------------------- |
| id         | Tenant ID                          |
| is_enabled | (optional) Tenant enabled status   |
| plan_id    | (optional) Tenant plan ID          |
| limits     | (optional) Tenant limits JSON      |
| env        | (optional) Tenant environment JSON |

### Delete tenant

The `delete` command removes a tenant from the Chevereto infrastructure.

```sh
app/bin/tenants -C delete --id 1
```

| Option      | Description                            |
| ----------- | -------------------------------------- |
| id          | Tenant ID                              |
| drop-tables | (optional) Drop tenant database tables |

### Cache tenants data

The `cache` command generates the cache for tenants in the Chevereto infrastructure. This command should be used when needing to cache refresh the entire tenants data.

```sh
app/bin/tenants -C cache
```

### Create tenant plan

The `plan:create` command creates a new tenant plan in the Chevereto infrastructure.

```sh
app/bin/tenants -C plan:create \
    --id 1 \
    --name "Basic Plan" \
    --limits '{}' \
    --env '{}'
```

| Option | Description                             |
| ------ | --------------------------------------- |
| id     | Tenant plan ID                          |
| name   | Tenant plan name                        |
| limits | (optional) Tenant plan limits JSON      |
| env    | (optional) Tenant plan environment JSON |

### Edit tenant plan

The `plan:edit` command modifies an existing tenant plan in the Chevereto infrastructure.

```sh
app/bin/tenants -C plan:edit \
    --id 1 \
    --name "Updated Plan" \
    --limits '{}' \
    --env '{}'
```

| Option | Description                             |
| ------ | --------------------------------------- |
| id     | Tenant plan ID                          |
| name   | Tenant plan name                        |
| limits | (optional) Tenant plan limits JSON      |
| env    | (optional) Tenant plan environment JSON |

### List tenant plans

The `plan:list` command outputs the list of tenant plans in the Chevereto infrastructure.

```sh
app/bin/tenants -C plan:list
```

### Delete tenant plan

The `plan:delete` command removes a tenant plan from the Chevereto infrastructure.

```sh
app/bin/tenants -C plan:delete --id 1
```

| Option | Description    |
| ------ | -------------- |
| id     | Tenant plan ID |

### Tenants jobs worker

The `jobs:worker` command starts the jobs worker process for tenants in the Chevereto infrastructure. This process is required for carrying out background tasks for tenants websites and to refresh the tenants stats table.

```sh
app/bin/tenants -C jobs:worker # all tenants
app/bin/tenants -C jobs:worker --id 1
app/bin/tenants -C jobs:worker --id 1 --verbose

```

| Option  | Description                       |
| ------- | --------------------------------- |
| id      | (optional) Tenant id              |
| verbose | (optional) Enable verbose logging |

### Tenants database migrate

The `database:migrate` command applies database migrations to tenants in the Chevereto infrastructure.

```sh
app/bin/tenants -C database:migrate # all tenants
app/bin/tenants -C database:migrate --id 1 --verbose
```

| Option  | Description                       |
| ------- | --------------------------------- |
| id      | (optional) Tenant id              |
| verbose | (optional) Enable verbose logging |
