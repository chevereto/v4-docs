# 💻 CLI

`app/bin/legacy`

::: danger Don't run as root
The Chevereto console **won't work** when using `root` user. It must be called from a normal user.
:::

Chevereto V4 includes a command line interface enabling to perform a variety of system tasks. This console command should be invoked in the following format:

```sh
app/bin/legacy -C <command> <options>
```

* `app/bin/legacy` path to the Chevereto console file
* `<command>` task to run
* `<options>` options for command

Command invocation vary depending on the system context, here samples for Debian and Docker:

<code-group>
<code-block title="Debian">
```sh
sudo -u www-data app/bin/legacy -C <command> <options>
```
</code-block>

<code-block title="Docker">
```sh
docker exec -it --user www-data \
    container_name \
    app/bin/legacy -C <command> <options>
```
</code-block>
</code-group>

## Install

The `install` command installs Chevereto. It requires to pass the admin user details.

To install Chevereto for user "rodolfo" with password "myPassword":

```sh
app/bin/legacy -C install \
    -u rodolfo \
    -e rodolfo@chevereto.loc \
    -x myPassword
```

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |

## Update

The `update` command updates the Chevereto database schema.

```sh
app/bin/legacy -C update
```

## Cron

The `cron` command runs the background jobs required by Chevereto.

```sh
app/bin/legacy -C cron
```

## Bulk importer

The `bulk-importer` command process files for [Bulk importer](https://v4-admin.chevereto.com/dashboard/bulk-importer.html).

```sh
app/bin/legacy -C bulk-importer
```

## Encryption

To use encryption it requires to configure the [CHEVERETO_ENCRYPTION_KEY](../configuration/environment.md#encryption-key) environment variable.

### Encrypt secrets

The `encrypt-secrets` command [encrypts](encryption.md) the application plain text secrets (not already encrypted) in the database.

```sh
app/bin/legacy -C encrypt-secrets
```

If the application secrets are **already encrypted** (stored as cipher text) it will require to pass the key for decrypting the existing secrets. Use the `-k` argument to indicate the key for the already stored cipher texts:

```sh
app/bin/legacy -C encrypt-secrets -k key_for_stored_data
```

### Decrypt secrets

The `decrypt-secrets` command decrypts the application secrets stored as cipher text in the database.

```sh
app/bin/legacy -C decrypt-secrets
```

💡 After running the above command set `CHEVERETO_ENCRYPTION_KEY` to **empty string** to disable encryption.

## Htaccess

### Htaccess checksum

The `htaccess-checksum` command generates safe `.htaccess` for Chevereto folders.

```sh
app/bin/legacy -C htaccess-checksum
```

### Htaccess enforce

The `htaccess-enforce` command checks for any alteration on the `.htaccess` files and reverts them to the defaults included by Chevereto.

```sh
app/bin/legacy -C htaccess-enforce
```

## Langs

The `langs` command generates the cache for language translations. The command outputs the list of languages processed.

```sh
app/bin/legacy -C langs
```

## Password reset

The `password-reset` command generates and assign a new password for the target username. The command outputs the new password.

To reset the password for user "rodolfo":

```sh
app/bin/legacy -C password-reset -u rodolfo
```

## Settings

### Setting get

The `setting-get` command retrieves the target database setting key value.

To get the value for "chevereto_version_installed":

```sh
app/bin/legacy -C setting-get -k chevereto_version_installed
```

### Setting update

The `setting-update` command updates the target database setting key value. It outputs the value after update.

To update the value for "maintenance":

```sh
app/bin/legacy -C setting-update -k maintenance -v true
```
