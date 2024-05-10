# Configuring

Chevereto V4 uses [environment variables](environment.md) for configuring system level settings.

Environment variables configured at `ENV` system level will **override** the configuration at `app/env.php`.

## Using `app/env.php`

For the most common use-case, set the system settings at the `app/env.php` file, which contains the application level settings.

This applies for `ENV` variables not set as `app/env.php` has **lower priority** than system wide [ENV](environment.md).

### Creating env file

This file will be created on installation after submitting the database details. You can also manually create it, it may look like this:

```php
<?php

return [
  'CHEVERETO_DB_NAME' => 'chevereto',
  'CHEVERETO_DB_PASS' => 'user_database_password',
  'CHEVERETO_DB_PORT' => '3306',
  'CHEVERETO_DB_TABLE_PREFIX' => 'chv_',
  'CHEVERETO_DB_USER' => 'user_database',
];
```

**Note:** The system requires to pass only the values that **overrides** the [defaults](#defaults).

### Defaults

The `app/env-default.php` file contains the default settings that are passed. Here below is how this file looks like:

::: details app/env-default.php
```php
<?php

return [
  'CHEVERETO_ASSET_STORAGE_ACCOUNT_ID' => '',
  'CHEVERETO_ASSET_STORAGE_ACCOUNT_NAME' => '',
  'CHEVERETO_ASSET_STORAGE_BUCKET' => '',
  'CHEVERETO_ASSET_STORAGE_KEY' => '',
  'CHEVERETO_ASSET_STORAGE_NAME' => 'assets',
  'CHEVERETO_ASSET_STORAGE_REGION' => '',
  'CHEVERETO_ASSET_STORAGE_SECRET' => '',
  'CHEVERETO_ASSET_STORAGE_SERVER' => '',
  'CHEVERETO_ASSET_STORAGE_SERVICE' => '',
  'CHEVERETO_ASSET_STORAGE_TYPE' => 'local',
  'CHEVERETO_ASSET_STORAGE_URL' => '',
  'CHEVERETO_CONTEXT' => '',
  'CHEVERETO_DB_DRIVER' => 'mysql',
  'CHEVERETO_DB_HOST' => 'localhost',
  'CHEVERETO_DB_NAME' => '',
  'CHEVERETO_DB_PASS' => '',
  'CHEVERETO_DB_PDO_ATTRS' => '[]',
  'CHEVERETO_DB_PORT' => '3306',
  'CHEVERETO_DB_TABLE_PREFIX' => 'chv_',
  'CHEVERETO_DB_USER' => '',
  'CHEVERETO_DEBUG_LEVEL' => '1',
  'CHEVERETO_ENABLE_BULK_IMPORTER' => '1',
  'CHEVERETO_ENABLE_CHECK_UPDATES' => '1',
  'CHEVERETO_ENABLE_HTACCESS_CHECK' => '0',
  'CHEVERETO_ENABLE_LOCAL_STORAGE' => '1',
  'CHEVERETO_ENABLE_PHP_PAGES' => '0',
  'CHEVERETO_ENABLE_UPDATE_CLI' => '1',
  'CHEVERETO_ENABLE_UPDATE_HTTP' => '1',
  'CHEVERETO_ENCRYPTION_KEY' => '',
  'CHEVERETO_ERROR_LOG' => 'php://stderr',
  'CHEVERETO_HEADER_CLIENT_IP' => '',
  'CHEVERETO_HOSTNAME_PATH' => '/',
  'CHEVERETO_HOSTNAME' => 'localhost',
  'CHEVERETO_HTTPS' => '1',
  'CHEVERETO_IMAGE_FORMATS_AVAILABLE' => '["JPEG","PNG","BMP","GIF","WEBP"]',
  'CHEVERETO_IMAGE_LIBRARY' => 'imagick',
  'CHEVERETO_MAX_ALBUMS' => '0',
  'CHEVERETO_MAX_EXECUTION_TIME_SECONDS' => '30',
  'CHEVERETO_MAX_IMAGES' => '0',
  'CHEVERETO_MAX_MEMORY_SIZE' => '512M',
  'CHEVERETO_MAX_POST_SIZE' => '64M',
  'CHEVERETO_MAX_UPLOAD_SIZE' => '64M',
  'CHEVERETO_MAX_USER_ALBUMS_LIST' => '300',
  'CHEVERETO_MAX_USERS' => '0',
  'CHEVERETO_SERVICING' => 'server',
  'CHEVERETO_SESSION_SAVE_HANDLER' => 'files',
  'CHEVERETO_SESSION_SAVE_PATH' => '/tmp',
  'CHEVERETO_BINARY_FFMPEG' => 'ffmpeg',
  'CHEVERETO_BINARY_FFPROBE' => 'ffprobe',
];
```
:::

## Using `ENV`

This applies where system environment variables can be configured. In this case, variables are handled in a plain text format like in the example below:

```plain
CHEVERETO_DB_HOST=localhost
```

### Apache HTTP Web Server (PHP module)

If PHP is provided using `mpm_prefork` you must refer to the documentation on [Apache HTTP Server environment variables](https://httpd.apache.org/docs/current/env.html).

### Other setups

For these you will be running [PHP-FPM](https://www.php.net/manual/en/install.fpm.configuration.php) so you can add those settings at your `php-fpm.conf` file.

### Application servers

For these you will be running PHP CLI so you should be able to pass those at `php.ini` for your CLI. You can also `export` those in your shell.

Refer to the documentation of each application server for the best way to pass environment variables to Chevereto.

### Container

Pass the environment variables to the `docker run` command or at `docker compose` layer (.yml file).
