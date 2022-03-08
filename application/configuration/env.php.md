# 📌 app/env.php

The file at `app/env.php` contains the application system level settings. Note that this applies only for `ENV` variables not set as `app/env.php` has lower priority.

## Creating the file

👉 The system requires to pass only the values that **overrides** the [defaults](#defaults).

This file will be created on installation after submitting the database details. You can also manually create it. It may look like this:

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

## Defaults

The `app/env-default.php` contains the default settings that are passed. Here below is how this file looks like:

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
  'CHEVERETO_DB_DRIVER' => 'mysql',
  'CHEVERETO_DB_HOST' => 'localhost',
  'CHEVERETO_DB_NAME' => '',
  'CHEVERETO_DB_PASS' => '',
  'CHEVERETO_DB_PDO_ATTRS' => '[]',
  'CHEVERETO_DB_PORT' => '3306',
  'CHEVERETO_DB_TABLE_PREFIX' => 'chv_',
  'CHEVERETO_DB_USER' => '',
  'CHEVERETO_DEBUG_LEVEL' => '1',
  'CHEVERETO_ENABLE_HTACCESS_CHECK' => '0',
  'CHEVERETO_ENABLE_PHP_PAGES' => '0',
  'CHEVERETO_ENABLE_UPDATE_CLI' => '1',
  'CHEVERETO_ENABLE_UPDATE_HTTP' => '1',
  'CHEVERETO_ERROR_LOG' => 'syslog',
  'CHEVERETO_HOSTNAME_PATH' => '/',
  'CHEVERETO_HOSTNAME' => 'localhost',
  'CHEVERETO_HTTPS' => '1',
  'CHEVERETO_IMAGE_FORMATS_AVAILABLE' => '["JPG","PNG","BMP","GIF","WEBP"]',
  'CHEVERETO_IMAGE_LIBRARY' => 'imagick',
  'CHEVERETO_MAX_EXECUTION_TIME' => '30',
  'CHEVERETO_MEMORY_LIMIT' => '512M',
  'CHEVERETO_POST_MAX_SIZE' => '64M',
  'CHEVERETO_SERVICING' => 'server',
  'CHEVERETO_SESSION_SAVE_HANDLER' => 'files',
  'CHEVERETO_SESSION_SAVE_PATH' => '/tmp',
  'CHEVERETO_UPLOAD_MAX_FILESIZE' => '64M',
];
```
