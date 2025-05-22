# Environment

## System variables

Environment variables for the system context. Available `server` and `docker`.

| Variable            | Example |
| ------------------- | ------- |
| CHEVERETO_SERVICING | server  |

## Database variables

Environment variables for the database details.

| Variable                  | Example                |
| ------------------------- | ---------------------- |
| CHEVERETO_DB_DRIVER       | mysql                  |
| CHEVERETO_DB_HOST         | mariadb                |
| CHEVERETO_DB_NAME         | chevereto              |
| CHEVERETO_DB_PASS         | user_database_password |
| CHEVERETO_DB_PDO_ATTRS    | {"key":"value"} (json) |
| CHEVERETO_DB_PORT         | 3306                   |
| CHEVERETO_DB_TABLE_PREFIX | chv_                   |
| CHEVERETO_DB_USER         | chevereto              |

## Error logging variables

Environment variables for handling [error](../reference/errors.md) logging.

| Variable                 | Default      |
| ------------------------ | ------------ |
| CHEVERETO_ERROR_LOG_CLI  |              |
| CHEVERETO_ERROR_LOG_CRON |              |
| CHEVERETO_ERROR_LOG      | php://stderr |

## Debug variables

Environment variables for [debug](../../developer/how-to/debug.md).

| Variable              | Example |
| --------------------- | ------- |
| CHEVERETO_DEBUG_LEVEL | 1       |

## xrDebug variables

| Variable                 | Example   |
| ------------------------ | --------- |
| CHEVERETO_ENABLE_XRDEBUG | 0         |
| CHEVERETO_XRDEBUG_HOST   | localhost |
| CHEVERETO_XRDEBUG_HTTPS  | 0         |
| CHEVERETO_XRDEBUG_KEY    | my_key    |
| CHEVERETO_XRDEBUG_PORT   | 27420     |

## Hostname variables

Environment variables for the hostname configuration.

| Variable                | Example       |
| ----------------------- | ------------- |
| CHEVERETO_HOSTNAME      | chevereto.com |
| CHEVERETO_HOSTNAME_PATH | /             |
| CHEVERETO_HTTPS         | 1             |

For `CHEVERETO_HOSTNAME` it refers to the network identifier and it supports hostname, ip address and domain name. It also supports suffixing the port (e.g., example.com:8080).

“Network identifier” conveys the idea of any entity that can identify or locate a resource or device within a network.

## Encryption key

Environment variables for the [encryption](../reference/encryption.md) functionality.

| Variable                 | Type                     |
| ------------------------ | ------------------------ |
| CHEVERETO_ENCRYPTION_KEY | base64 encoded (size 32) |

## Session variables

Environment variables for the session driver.

| Variable                       | Example                        |
| ------------------------------ | ------------------------------ |
| CHEVERETO_SESSION_SAVE_HANDLER | files, redis                   |
| CHEVERETO_SESSION_SAVE_PATH    | /tmp, tcp://ip:port?auth[]=abc |

## Image handling variables

Environment variables for controlling image handling.

| Variable                          | Example                                |
| --------------------------------- | -------------------------------------- |
| CHEVERETO_IMAGE_FORMATS_AVAILABLE | 'AVIF','JPEG','PNG','BMP','GIF','WEBP' |
| CHEVERETO_IMAGE_LIBRARY           | imagick                                |

## Binary paths

Environment variables for configuring binary tools used by Chevereto.

| Variable                  | Example            |
| ------------------------- | ------------------ |
| CHEVERETO_BINARY_EXIFTOOL | exiftool           |
| CHEVERETO_BINARY_EXIFTRAN | exiftran'          |
| CHEVERETO_BINARY_FFMPEG   | /some/path/ffmpeg  |
| CHEVERETO_BINARY_FFPROBE  | /some/path/ffprobe |

## Cache variables

Environment variables for setting up application-level caching.

| Variable                     | Example        |
| ---------------------------- | -------------- |
| CHEVERETO_CACHE_DRIVER       | redis          |
| CHEVERETO_CACHE_HOST         | localhost      |
| CHEVERETO_CACHE_PASSWORD     | redis_password |
| CHEVERETO_CACHE_PORT         | 6379           |
| CHEVERETO_CACHE_USER         | redis_user     |
| CHEVERETO_CACHE_TIME_MICRO   | 60             |
| CHEVERETO_CACHE_STAMPEDE_SLA | 1000           |

## Toggles

Environment variables for the context where Chevereto system is being provided. Depending on where you run it, you may want to disable some Chevereto functionality.

| Variable                                    | Default |
| ------------------------------------------- | ------- |
| CHEVERETO_ENABLE_API_GUEST                  | 1       |
| CHEVERETO_ENABLE_API_USER                   | 1       |
| CHEVERETO_ENABLE_BANNERS                    | 1       |
| CHEVERETO_ENABLE_BULK_IMPORTER              | 1       |
| CHEVERETO_ENABLE_CAPTCHA                    | 1       |
| CHEVERETO_ENABLE_CDN                        | 1       |
| CHEVERETO_ENABLE_CONSENT_SCREEN             | 1       |
| CHEVERETO_ENABLE_COOKIE_COMPLIANCE          | 1       |
| CHEVERETO_ENABLE_DEBUG                      | 1       |
| CHEVERETO_ENABLE_EXPOSE_PAID_FEATURES       | 1       |
| CHEVERETO_ENABLE_EXTERNAL_SERVICES          | 1       |
| CHEVERETO_ENABLE_EXTERNAL_STORAGE_PROVIDERS | 1       |
| CHEVERETO_ENABLE_FAVICON                    | 1       |
| CHEVERETO_ENABLE_FOLLOWERS                  | 1       |
| CHEVERETO_ENABLE_FORCE_POWERED_BY_FOOTER    | 0       |
| CHEVERETO_ENABLE_HTACCESS_CHECK             | 0       |
| CHEVERETO_ENABLE_IP_BANS                    | 1       |
| CHEVERETO_ENABLE_LANGUAGE_CHOOSER           | 1       |
| CHEVERETO_ENABLE_LIKES                      | 1       |
| CHEVERETO_ENABLE_LOCAL_STORAGE              | 1       |
| CHEVERETO_ENABLE_LOGIN_PROVIDERS            | 1       |
| CHEVERETO_ENABLE_LOGO_CUSTOM                | 1       |
| CHEVERETO_ENABLE_MODERATION                 | 1       |
| CHEVERETO_ENABLE_NEWS_CHECK                 | 1       |
| CHEVERETO_ENABLE_NOTIFICATIONS              | 1       |
| CHEVERETO_ENABLE_PAGES                      | 1       |
| CHEVERETO_ENABLE_PHP_PAGES                  | 0       |
| CHEVERETO_ENABLE_POWERED_BY_SETTING         | 1       |
| CHEVERETO_ENABLE_PUP_CUSTOM_URL             | 1       |
| CHEVERETO_ENABLE_ROUTING                    | 1       |
| CHEVERETO_ENABLE_SEO_ALBUM_URL              | 1       |
| CHEVERETO_ENABLE_SEO_IMAGE_URL              | 1       |
| CHEVERETO_ENABLE_SERVICE_AKISMET            | 1       |
| CHEVERETO_ENABLE_SERVICE_MODERATECONTENT    | 0       |
| CHEVERETO_ENABLE_SERVICE_PROJECTARACHNID    | 1       |
| CHEVERETO_ENABLE_SERVICE_STOPFORUMSPAM      | 1       |
| CHEVERETO_ENABLE_STOPWORDS                  | 1       |
| CHEVERETO_ENABLE_UPDATE_CHECK               | 1       |
| CHEVERETO_ENABLE_UPDATE_CLI                 | 1       |
| CHEVERETO_ENABLE_UPDATE_HTTP                | 1       |
| CHEVERETO_ENABLE_UPLOAD_FLOOD_PROTECTION    | 1       |
| CHEVERETO_ENABLE_UPLOAD_PLUGIN              | 1       |
| CHEVERETO_ENABLE_UPLOAD_URL                 | 1       |
| CHEVERETO_ENABLE_UPLOAD_WATERMARK           | 1       |
| CHEVERETO_ENABLE_USERS                      | 1       |
| CHEVERETO_ENABLE_XRDEBUG                    | 0       |

## Limits

Environment variables that limits the use for Chevereto

Zero `0` means no limit.

| Variable                             | Example |
| ------------------------------------ | ------- |
| CHEVERETO_MAX_ADMINS                 | 0       |
| CHEVERETO_MAX_ALBUMS                 | 0       |
| CHEVERETO_MAX_CACHE_TTL              | 86400   |
| CHEVERETO_MAX_CATEGORIES             | 0       |
| CHEVERETO_MAX_CHUNK_UPLOAD_SIZE      | 16M     |
| CHEVERETO_MAX_EXECUTION_TIME_SECONDS | 30      |
| CHEVERETO_MAX_FILES                  | 0       |
| CHEVERETO_MAX_LISTING_ITEMS_PER_PAGE | 0       |
| CHEVERETO_MAX_LOGIN_PROVIDERS        | 0       |
| CHEVERETO_MAX_MANAGERS               | 0       |
| CHEVERETO_MAX_MEMORY_SIZE            | 512M    |
| CHEVERETO_MAX_PAGES                  | 0       |
| CHEVERETO_MAX_POST_SIZE              | 100M    |
| CHEVERETO_MAX_STORAGES               | 0       |
| CHEVERETO_MAX_TAGS                   | 0       |
| CHEVERETO_MAX_TAGS_PER_FILE          | 0       |
| CHEVERETO_MAX_TAGS_PER_LISTING       | 0       |
| CHEVERETO_MAX_UPLOAD_SIZE            | 100M    |
| CHEVERETO_MAX_USER_ALBUMS_LIST       | 500     |
| CHEVERETO_MAX_USERS                  | 0       |
| CHEVERETO_MIN_STORAGES_ACTIVE        | 0       |

* For `CHEVERETO_MAX_USER_ALBUMS_LIST` it affects the number of albums on user's dropdown album menus.

## File upload

Environment variables for the file uploading limits. It applies only for our container provisioning.

For **non-container** based provisioning you need to change these settings at [php.ini configuration](../stack/php.md#configuration).

| Variable                             | Example |
| ------------------------------------ | ------- |
| CHEVERETO_MAX_UPLOAD_FILE_SIZE       | 64M     |
| CHEVERETO_MAX_POST_SIZE              | 64M     |
| CHEVERETO_MAX_EXECUTION_TIME_SECONDS | 30      |
| CHEVERETO_MAX_MEMORY_SIZE            | 512M    |

## Proxy

Environment variables for tweaking server handling when the server is under a proxy.

| Variable                   | Example   |
| -------------------------- | --------- |
| CHEVERETO_HEADER_CLIENT_IP | X-Real-IP |
