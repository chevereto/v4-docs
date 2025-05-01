# CRON

Chevereto requires to setup [cron](https://en.wikipedia.org/wiki/Cron) to run background jobs.

This cron setup reference applies *mostly* for **Debian-based** systems. We **recommend** checking your server documentation on how to setup and run cron.

Consider to contribute to this documentation with alternative cron setup alternatives.

## What it does?

A cron is system in which a command is executed in a regular basis, this way Chevereto can perform operations in the background without user intervention.

| Job                   | Purpose                                                      |
| --------------------- | ------------------------------------------------------------ |
| checkForNews          | Check for news about Chevereto                               |
| checkForUpdates       | Check for available Chevereto updates                        |
| checkHtaccess         | Check the integrity of the `.htaccess` files                 |
| cleanUnconfirmedUsers | Clears records for users which never confirmed their account |
| deleteExpiredImages   | Deletes files set to expire at a certain date                |
| removeDeleteLog       | Removes the old delete log entries                           |
| storageDelete         | Delete files queued to removal                               |
| deleteExpiredUploads  | Deletes orphan/abandoned chunked uploads                     |

## Troubleshoot

::: tip
Refer to your system documentation and/or administrator for the best strategy when running Chevereto's cron requirements.
:::

Having issues? Check the following common pitfalls:

* Invalid format for cron schedule
* The PHP binary **may not** be available in cron context, use the full PHP path binary
* The location of the `app/bin/legacy` console may vary, use what reflects the file in your system
* Wrong user running the command (requires a **normal user** with access to the project directory)
* User `www-data` applies only for **Debian-based** system. Refer to your sysadmin for the appropriate user when using other OS

## Command

The command should be run by the web-server user which is `www-data` (may vary). To run the command in Chevereto it requires to call PHP binary at the Chevereto CLI.

Use `which php` to locate the PHP binary as its location.

Refer to [CLI Cron](../reference/cli.md#cron).

### Docker command

```sh
docker exec -it \
    --user www-data \
    chevereto-container app/bin/legacy -C cron
```

## Cron.d file

Recommended setup is to create a [cron.d file](https://manpages.debian.org/stretch/cron/cron.8). This is easy as:

```sh
cat >/etc/cron.d/chevereto <<EOM
* * * * * www-data php /var/www/html/app/bin/legacy -C cron
EOM
```

In the instruction above [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute.

## cPanel/Plesk

Refer to [cPanel CRON](../../guides/cpanel/cron.md) and [Plesk CRON](../../guides/plesk/cron.md) to learn how to setup cron jobs in those systems.
