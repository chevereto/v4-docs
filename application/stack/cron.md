# ⏲️ CRON

Chevereto requires to setup [cron](https://en.wikipedia.org/wiki/Cron) to run background jobs.

💡 This cron setup reference applies *mostly* for **Debian-based** systems. We **recommend** checking your server documentation on how to setup and run cron.

👏 Consider to contribute to this documentation by improving this document with alternative cron setup alternatives.

## What it does?

A cron is system in which a command is executed in a regular basis, this way Chevereto can perform operations in the background.

## Troubleshoot

Having issues? Check the following common pitfalls:

* Wrong user running the command (requires user with access to the project directory)
* Invalid php binary (provide full path when possible)
* Outdated Chevereto database (required to store last run)
* PHP binary context/settings should be same as when wiring to HTTP web server
* Invalid format for cron schedule

## Command

The command should be run by the web-server user which is `www-data` (may vary). To run the command in Chevereto it requires to call PHP binary at the Chevereto CLI.

💡 Use `which php` to locate the PHP binary as its location may vary in different systems and configurations.

Command below uses `sudo -u www-data` to run the command as `www-data` user permissions. PHP binary is at `php` and the Chevereto CLI is at `/var/www/html/cli.php`. The command argument passed to Chevereto is `-C cron`.

```sh
sudo -u www-data php /var/www/html/app/bin/legacy -C cron
```

### Docker command

```sh
docker exec -it \
    --user www-data \
    chevereto-container php /var/www/html/app/bin/legacy -C cron
```

## Cron.d file

Recommended setup is to create a [cron.d file](https://manpages.debian.org/stretch/cron/cron.8). This is easy as:

```sh
cat >/etc/cron.d/chevereto <<EOM
* * * * * www-data php /var/www/html/app/bin/legacy -C cron
EOM
```

In the instruction above [* * * * *](https://crontab.guru/#*_*_*_*_*) is the cron schedule to run every minute.

## Cron troubleshoot

👉 Refer to your system documentation and/or administrator for the best strategy when running Chevereto's cron requirements.
