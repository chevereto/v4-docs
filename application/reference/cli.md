# CLI

`app/bin/console`

Chevereto V4 includes a command line interface enabling to perform a variety of system tasks. This console command should be invoked in the following format:

```sh
app/bin/console -C <command> <options>
```

## Cron

The `-C cron` command runs the background jobs required by Chevereto.

```sh
app/bin/console -C cron
```

## Htaccess

### Htaccess checksum

The `-C htaccess-checksum` command.

```sh
app/bin/console -C htaccess-checksum
```

### Htaccess enforce

The `-C htaccess-enforce` command checks for any alteration on the `.htaccess` files and reverts them to the defaults included by Chevereto.

```sh
app/bin/console -C htaccess-enforce
```

## Importer

The `-C importer` command process files for [Bulk importer](https://v4-admin.chevereto.com/dashboard/bulk-importer.html).

```sh
app/bin/console -C importer
```

## Install

The `-C install` command installs Chevereto. It requires to pass the admin user details.

To install Chevereto for user "rodolfo" with password "myPassword":

```sh
app/bin/console -C install \
    -u rodolfo \
    -e rodolfo@chevereto.loc \
    -x myPassword
```

## Database update

The `-C database-update` command updates the Chevereto database schema.

```sh
app/bin/console -C database-update
```

## Langs

The `-C langs` command generates the cache for language translations. The command outputs the list of languages processed.

```sh
app/bin/console -C langs
```

## Password reset

The `-C password-reset` command generates and assign a new password for the target username. The command outputs the new password.

To reset the password for user "rodolfo":

```sh
app/bin/console -C password-reset -u rodolfo
```

## Settings

### Setting get

The `-C setting-get` command retrieves the target database setting key value.

To get the value for "chevereto_version_installed":

```sh
app/bin/console -C setting-get -k chevereto_version_installed
```

### Setting update

The `-C setting-update` command updates the target database setting key value. It outputs the value after update.

To update the value for "maintenance":

```sh
app/bin/console -C setting-update -k maintenance -v true
```
