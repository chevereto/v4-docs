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

## Cron

The `cron` command runs the background jobs required by Chevereto.

```sh
app/bin/legacy -C cron
```

## Htaccess

### Htaccess checksum

The `htaccess-checksum` command.

```sh
app/bin/legacy -C htaccess-checksum
```

### Htaccess enforce

The `htaccess-enforce` command checks for any alteration on the `.htaccess` files and reverts them to the defaults included by Chevereto.

```sh
app/bin/legacy -C htaccess-enforce
```

## Bulk importer

The `bulk-importer` command process files for [Bulk importer](https://v4-admin.chevereto.com/dashboard/bulk-importer.html).

```sh
app/bin/legacy -C bulk-importer
```

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

## Database update

The `database-update` command updates the Chevereto database schema.

```sh
app/bin/legacy -C database-update
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
