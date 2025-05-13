# Upgrading

This process is for upgrading to Chevereto V4 from **Chevereto V3.20** (previous major release). Check [Upgrading Free](./from-free.md) if you need to upgrade from a free edition.

Review [Chevereto V4 vs V3](../../introduction/changelog/welcome-back.md#chevereto-v4-vs-v3) comparison tables for a better understanding of changes in V4.

## Requirements

* Existing installation running Chevereto V3.20
* Backup for the existing previous installation (optional, recommended)

## Upgrade to V4

Upgrade to Chevereto V4 is performed by overriding the previous software files with the new files provided by Chevereto V4.

Follow these step:

* Remove `app/vendor` from your Chevereto V3 installation
* Override Chevereto V3 files with Chevereto V4 files
* Switch to PHP 8
* Create [app/env.php](../configuration/configuring.md#using-appenvphp) (see remark below)
* Proceed with [database update](updating.md#database-update)

### Application settings

Chevereto V4 uses a new [configuration](../configuration/configuring.md) standard.

* Rename `app/settings.php` to `app/env.php`
* Update file accordingly the updated [environment](../configuration/environment.md)

```php
<?php // app/settings.php
$settings['db_host'] = 'localhost';
$settings['db_name'] = 'chevereto';
$settings['db_user'] = 'user';
$settings['db_pass'] = 'pass';
```

```php
<?php // app/env.php
return [
    'CHEVERETO_DB_HOST' => 'localhost',
    'CHEVERETO_DB_NAME' => 'chevereto',
    'CHEVERETO_DB_USER' => 'user',
    'CHEVERETO_DB_PASS' => 'pass',
];
```

### CRON

Chevereto V4 comes with a new console. You must update your [CRON](../stack/cron.md) command to point to the new location.

From Chevereto V3 cron:

```sh
cli.php -C cron
```

To Chevereto V4 cron:

```sh
app/bin/cli -C cron
```
