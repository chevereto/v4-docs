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
    'CHEVERETO_BINARY_FFMPEG' => 'ffmpeg',
    'CHEVERETO_BINARY_FFPROBE' => 'ffprobe',
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
    'CHEVERETO_EDITION' => 'pro',
    'CHEVERETO_ENABLE_API_GUEST' => '1',
    'CHEVERETO_ENABLE_BANNERS' => '1',
    'CHEVERETO_ENABLE_BULK_IMPORTER' => '1',
    'CHEVERETO_ENABLE_CAPTCHA' => '1',
    'CHEVERETO_ENABLE_CDN' => '1',
    'CHEVERETO_ENABLE_CONSENT_SCREEN' => '1',
    'CHEVERETO_ENABLE_COOKIE_COMPLIANCE' => '1',
    'CHEVERETO_ENABLE_DEBUG' => '1',
    'CHEVERETO_ENABLE_EXPOSE_PAID_FEATURES' => '1',
    'CHEVERETO_ENABLE_EXTERNAL_SERVICES' => '1',
    'CHEVERETO_ENABLE_EXTERNAL_STORAGE_PROVIDERS' => '1',
    'CHEVERETO_ENABLE_FAVICON' => '1',
    'CHEVERETO_ENABLE_FOLLOWERS' => '1',
    'CHEVERETO_ENABLE_FORCE_POWERED_BY_FOOTER' => '0',
    'CHEVERETO_ENABLE_HTACCESS_CHECK' => '0',
    'CHEVERETO_ENABLE_IP_BANS' => '1',
    'CHEVERETO_ENABLE_LANGUAGE_CHOOSER' => '1',
    'CHEVERETO_ENABLE_LIKES' => '1',
    'CHEVERETO_ENABLE_LOCAL_STORAGE' => '1',
    'CHEVERETO_ENABLE_LOGIN_PROVIDERS' => '1',
    'CHEVERETO_ENABLE_LOGO_CUSTOM' => '1',
    'CHEVERETO_ENABLE_MODERATION' => '1',
    'CHEVERETO_ENABLE_NEWS_CHECK' => '1',
    'CHEVERETO_ENABLE_NOTIFICATIONS' => '1',
    'CHEVERETO_ENABLE_PAGES' => '1',
    'CHEVERETO_ENABLE_PHP_PAGES' => '0',
    'CHEVERETO_ENABLE_POWERED_BY_SETTING' => '1',
    'CHEVERETO_ENABLE_PUP_CUSTOM_URL' => '1',
    'CHEVERETO_ENABLE_ROUTING' => '1',
    'CHEVERETO_ENABLE_SEO_ALBUM_URL' => '1',
    'CHEVERETO_ENABLE_SEO_IMAGE_URL' => '1',
    'CHEVERETO_ENABLE_SERVICE_AKISMET' => '1',
    'CHEVERETO_ENABLE_SERVICE_MODERATECONTENT' => '1',
    'CHEVERETO_ENABLE_SERVICE_PROJECTARACHNID' => '1',
    'CHEVERETO_ENABLE_SERVICE_STOPFORUMSPAM' => '1',
    'CHEVERETO_ENABLE_STOPWORDS' => '1',
    'CHEVERETO_ENABLE_UPDATE_CHECK' => '1',
    'CHEVERETO_ENABLE_UPDATE_CLI' => '1',
    'CHEVERETO_ENABLE_UPDATE_HTTP' => '1',
    'CHEVERETO_ENABLE_UPLOAD_FLOOD_PROTECTION' => '1',
    'CHEVERETO_ENABLE_UPLOAD_PLUGIN' => '1',
    'CHEVERETO_ENABLE_UPLOAD_URL' => '1',
    'CHEVERETO_ENABLE_UPLOAD_WATERMARK' => '1',
    'CHEVERETO_ENABLE_USERS' => '1',
    'CHEVERETO_ENABLE_XRDEBUG' => '0',
    'CHEVERETO_ENCRYPTION_KEY' => '',
    'CHEVERETO_ERROR_LOG_CLI' => '',
    'CHEVERETO_ERROR_LOG_CRON' => '',
    'CHEVERETO_ERROR_LOG' => 'php://stderr',
    'CHEVERETO_HEADER_CLIENT_IP' => '',
    'CHEVERETO_HOSTNAME_PATH' => '/',
    'CHEVERETO_HOSTNAME' => 'localhost',
    'CHEVERETO_HTTPS' => '1',
    'CHEVERETO_IMAGE_FORMATS_AVAILABLE' => '["AVIF","JPEG","PNG","BMP","GIF","WEBP"]',
    'CHEVERETO_IMAGE_LIBRARY' => 'imagick',
    'CHEVERETO_MAX_ADMINS' => '0',
    'CHEVERETO_MAX_ALBUMS' => '0',
    'CHEVERETO_MAX_CATEGORIES' => '0',
    'CHEVERETO_MAX_EXECUTION_TIME_SECONDS' => '30',
    'CHEVERETO_MAX_FILES' => '0',
    'CHEVERETO_MAX_LOGIN_PROVIDERS' => '0',
    'CHEVERETO_MAX_MANAGERS' => '0',
    'CHEVERETO_MAX_MEMORY_SIZE' => '512M',
    'CHEVERETO_MAX_PAGES' => '0',
    'CHEVERETO_MAX_POST_SIZE' => '100M',
    'CHEVERETO_MAX_STORAGES' => '0',
    'CHEVERETO_MAX_TAGS_PER_FILE' => '0',
    'CHEVERETO_MAX_TAGS_PER_LISTING' => '0',
    'CHEVERETO_MAX_TAGS' => '0',
    'CHEVERETO_MAX_UPLOAD_SIZE' => '100M',
    'CHEVERETO_MAX_USER_ALBUMS_LIST' => '500',
    'CHEVERETO_MAX_USERS' => '0',
    'CHEVERETO_MIN_STORAGES_ACTIVE' => '0',
    'CHEVERETO_SERVICING' => 'server',
    'CHEVERETO_SESSION_SAVE_HANDLER' => 'files',
    'CHEVERETO_SESSION_SAVE_PATH' => '/tmp',
    'CHEVERETO_XRDEBUG_HOST' => 'localhost',
    'CHEVERETO_XRDEBUG_HTTPS' => '0',
    'CHEVERETO_XRDEBUG_KEY' => '',
    'CHEVERETO_XRDEBUG_PORT' => '27420',
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
