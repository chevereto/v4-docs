# Environment

## Assets variables

Environment variables for storing assets that can be uploaded to any of the supported external storage APIs. Assets refers to user provided assets such as avatars and backgrounds, also website graphics like logos and homepage covers.

Check [External storage](https://v4-admin.chevereto.com/features/external-storage.html) for adding external storage servers for user content uploads.

| Variable                             | Example        |
| ------------------------------------ | -------------- |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_ID   | 123            |
| CHEVERETO_ASSET_STORAGE_ACCOUNT_NAME | account_name   |
| CHEVERETO_ASSET_STORAGE_BUCKET       | bucket         |
| CHEVERETO_ASSET_STORAGE_KEY          | key            |
| CHEVERETO_ASSET_STORAGE_NAME         | assets         |
| CHEVERETO_ASSET_STORAGE_REGION       | us-west-2      |
| CHEVERETO_ASSET_STORAGE_SECRET       | secret         |
| CHEVERETO_ASSET_STORAGE_SERVER       | server         |
| CHEVERETO_ASSET_STORAGE_SERVICE      | service        |
| CHEVERETO_ASSET_STORAGE_TYPE         | s3             |
| CHEVERETO_ASSET_STORAGE_URL          | `<url>/bucket` |

## Database variables

Environment variables for the database details.

| Variable                  | Example                  |
| ------------------------- | ------------------------ |
| CHEVERETO_DB_DRIVER       | mysql                    |
| CHEVERETO_DB_HOST         | mariadb                  |
| CHEVERETO_DB_NAME         | chevereto                |
| CHEVERETO_DB_PASS         | user_database_password   |
| CHEVERETO_DB_PDO_ATTRS    | `{"key":"value"}` (json) |
| CHEVERETO_DB_PORT         | `3306`                   |
| CHEVERETO_DB_TABLE_PREFIX | chv_                     |
| CHEVERETO_DB_USER         | chevereto                |

## Error logging variables

Environment variables for handling [errors](../reference/errors.md).

| Variable            | Example                      |
| ------------------- | ---------------------------- |
| CHEVERETO_ERROR_LOG | /var/log/chevereto-error.log |

## Debug variables

Environment variables for [debug](../../developer/how-to/debug.md).

| Variable              | Example |
| --------------------- | ------- |
| CHEVERETO_DEBUG_LEVEL | `1`     |

## Hostname variables

Environment variables for the hostname configuration.

| Variable                | Example       |
| ----------------------- | ------------- |
| CHEVERETO_HOSTNAME      | chevereto.loc |
| CHEVERETO_HOSTNAME_PATH | /             |
| CHEVERETO_HTTPS         | `true`        |

## Encryption key

Environment variables for the [encryption](../reference/encryption.md) functionality.

| Variable                 | Type                     |
| ------------------------ | ------------------------ |
| CHEVERETO_ENCRYPTION_KEY | base64 encoded (size 32) |

## Session variables

Environment variables for the session driver.

| Variable                       | Example |
| ------------------------------ | ------- |
| CHEVERETO_SESSION_SAVE_HANDLER | `files` |
| CHEVERETO_SESSION_SAVE_PATH    | `/tmp`  |

## Image handling variables

Environment variables for controlling image handling.

| Variable                          | Example                          |
| --------------------------------- | -------------------------------- |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | `'JPG','PNG','BMP','GIF','WEBP'` |
| CHEVERETO_IMAGE_LIBRARY           | `imagick`                        |

## Binary paths

Environment variables for controlling binary tools used by Chevereto.

| Variable                 | Example              |
| ------------------------ | -------------------- |
| CHEVERETO_BINARY_FFMPEG  | `/some/path/ffmpeg`  |
| CHEVERETO_BINARY_FFPROBE | `/some/path/ffprobe` |

## Toggles

Environment variables for the context where Chevereto system is being provided. Depending on where you run it, you may want to disable some Chevereto functionality.

| Variable                        | Default |
| ------------------------------- | ------- |
| CHEVERETO_ENABLE_BULK_IMPORTER  | `1`     |
| CHEVERETO_ENABLE_CHECK_UPDATES  | `1`     |
| CHEVERETO_ENABLE_HTACCESS_CHECK | `0`     |
| CHEVERETO_ENABLE_LOCAL_STORAGE  | `1`     |
| CHEVERETO_ENABLE_PHP_PAGES      | `0`     |
| CHEVERETO_ENABLE_UPDATE_CLI     | `1`     |
| CHEVERETO_ENABLE_UPDATE_HTTP    | `1`     |

## Limits

Environment variables that limits the use for Chevereto

Zero `0` means no limit.

| Variable                       | Example |
| ------------------------------ | ------- |
| CHEVERETO_MAX_ALBUMS           | `0`     |
| CHEVERETO_MAX_IMAGES           | `0`     |
| CHEVERETO_MAX_USER_ALBUMS_LIST | `300`   |
| CHEVERETO_MAX_USERS            | `0`     |

* For `CHEVERETO_MAX_USER_ALBUMS_LIST` it affects the number of albums on user's dropdown album menus.

## File upload

Environment variables for the file uploading limits. It applies only for our container provisioning.

For **non-container** based provisioning you need to change these settings at [php.ini configuration](../stack/php.md#configuration).

| Variable                             | Example |
| ------------------------------------ | ------- |
| CHEVERETO_MAX_UPLOAD_SIZE            | 64M     |
| CHEVERETO_MAX_POST_SIZE              | 64M     |
| CHEVERETO_MAX_EXECUTION_TIME_SECONDS | 30      |
| CHEVERETO_MAX_MEMORY_SIZE            | 512M    |

## Proxy

Environment variables for tweaking server handling when the server is under a proxy.

| Variable                   | Example   |
| -------------------------- | --------- |
| CHEVERETO_HEADER_CLIENT_IP | X-Real-IP |
