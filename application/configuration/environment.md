# 🗿 Environment

## Assets variables

Environment variables for storing assets that can be uploaded to any of the supported external storage APIs. Assets refers to user provided assets such as avatars and backgrounds, also website graphics like logos and homepage covers.

💡 Check [External storage](https://v4-admin.chevereto.com/features/external-storage.html) for adding external storage servers for user content uploads.

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

## Debug variables

Environment variables for [debug](../../developer/how-to/debug.md).

💡 When using Docker Chevereto logs to `/dev/stderr` regardless this configuration.

| Variable              | Example                      |
| --------------------- | ---------------------------- |
| CHEVERETO_DEBUG_LEVEL | `1`                          |
| CHEVERETO_ERROR_LOG   | /var/log/chevereto-error.log |

## Session variables

Environment variables for the session driver.

| Variable                       | Example              |
| ------------------------------ | -------------------- |
| CHEVERETO_SESSION_SAVE_HANDLER | `redis` `files`      |
| CHEVERETO_SESSION_SAVE_PATH    | `tcp://redis` `/tmp` |

## Image handling variables

Environment variables for controlling image handling.

| Variable                          | Example                          |
| --------------------------------- | -------------------------------- |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | `'JPG','PNG','BMP','GIF','WEBP'` |
| CHEVERETO_IMAGE_LIBRARY           | `imagick` `gd`                   |

## Hostname variables

Environment variables for the hostname configuration.

| Variable                | Example       |
| ----------------------- | ------------- |
| CHEVERETO_HOSTNAME      | chevereto.loc |
| CHEVERETO_HOSTNAME_PATH | /             |
| CHEVERETO_HTTPS         | `true`        |

## System context variables

Environment variables for the context where Chevereto system is being provided. Depending on where you run it, you may want to disable sensitive functionality.

| Variable                         | Example |
| -------------------------------- | ------- |
| CHEVERETO_DISABLE_PHP_PAGES      | `false` |
| CHEVERETO_DISABLE_UPDATE_HTTP    | `false` |
| CHEVERETO_DISABLE_UPDATE_CLI     | `false` |
| CHEVERETO_ENABLE_HTACCESS_CHECK  | `true`  |
| CHEVERETO_USER_ALBUMS_LIST_LIMIT | `500`   |

* For `CHEVERETO_USER_ALBUMS_LIST_LIMIT` it controls the number of albums on user's dropdown album menus.

## File upload variables

Environment variables for the file uploading limits. Note that the following environment variables will work for container provisioning.

👉 For **non-container** based provisioning you need to also change these settings at [php.ini configuration](../stack/php.md#php-configuration).

| Variable                      | Example |
| ----------------------------- | ------- |
| CHEVERETO_UPLOAD_MAX_FILESIZE | 64M     |
| CHEVERETO_POST_MAX_SIZE       | 64M     |
| CHEVERETO_MAX_EXECUTION_TIME  | 30      |
| CHEVERETO_MEMORY_LIMIT        | 512M    |
