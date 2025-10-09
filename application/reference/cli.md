# CLI

`app/bin/cli`

Chevereto V4 includes a command line interface enabling to perform a variety of system tasks. This console command should be invoked in the following format:

```sh
app/bin/cli -C <command> <options>
```

* `app/bin/cli` path to the Chevereto console file
* `<command>` task to run
* `<options>` options for command

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

## Bulk importer

The `bulk-importer` command process files for [Bulk importer](https://v4-admin.chevereto.com/dashboard/bulk-importer.html).

```sh
app/bin/cli -C bulk-importer
```

## Cache flush

The `cache-flush` command clears the application cache and outputs the status of the operation for each key.

```sh
app/bin/cli -C cache-flush
```

## Cache view

The `cache-view` command displays information about the application cache, including the cache key, TTL (in seconds), and memory usage.

```sh
app/bin/cli -C cache-view
```

## Cron

The `cron` command runs the background jobs required by Chevereto.

```sh
app/bin/cli -C cron
```

## Encrypt secrets

The `encrypt-secrets` command [encrypts](encryption.md) the application plain text secrets (not already encrypted) in the database.

```sh
app/bin/cli -C encrypt-secrets
```

If the application secrets are **already encrypted** (stored as cipher text) it will require to pass the key for decrypting the existing secrets. Use the `-k` argument to indicate the key for the already stored cipher texts:

```sh
app/bin/cli -C encrypt-secrets -k key_for_stored_data
```

## Decrypt secrets

The `decrypt-secrets` command decrypts the application secrets stored as cipher text in the database.

```sh
app/bin/cli -C decrypt-secrets
```

After running the above command set `CHEVERETO_ENCRYPTION_KEY` to **empty string** to disable encryption.

## Htaccess

### Htaccess checksum

The `htaccess-checksum` command generates safe `.htaccess` for Chevereto folders.

```sh
app/bin/cli -C htaccess-checksum
```

### Htaccess enforce

The `htaccess-enforce` command checks for any alteration on the `.htaccess` files and reverts them to the defaults included by Chevereto.

```sh
app/bin/cli -C htaccess-enforce
```

## Install

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

## Langs

The `langs` command generates the cache for language translations. The command outputs the list of languages processed.

```sh
app/bin/cli -C langs
```

## Metrics

The `metrics` command outputs Chevereto application metrics.

```sh
app/bin/cli -C metrics
```

Pass `-f json` to output the metrics as JSON.

```sh
app/bin/cli -C metrics -f json
```

## Password reset

The `password-reset` command generates and assign a new password for the target username. The command outputs the new password.

To reset the password for user "rodolfo":

```sh
app/bin/cli -C password-reset -u rodolfo
```

## Setting get

The `setting-get` command retrieves the target database setting key value.

To get the value for "chevereto_version_installed":

```sh
app/bin/cli -C setting-get -k chevereto_version_installed
```

## Setting update

The `setting-update` command updates the target database setting key value. It outputs the value after update.

To update the value for "maintenance":

```sh
app/bin/cli -C setting-update -k maintenance -v true
```

## Update

The `update` command updates the Chevereto database schema.

```sh
app/bin/cli -C update
```

## Version

The `version` command outputs the Chevereto application filesystem version.

```sh
app/bin/cli -C version
```
