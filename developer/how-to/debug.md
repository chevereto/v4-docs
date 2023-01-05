# 🐞 Debug

Debug enables to dump information about errors that may be affecting the software functionality. If Chevereto isn't working properly it will require debugging to understand the situation.

## Debug in production

Enable debug at [Settings > System > Debug Errors](https://v4-admin.chevereto.com/settings/system.html#debug-errors). By enabling this Chevereto will debug errors to the screen, but only to administrators.

## Debug in development

Debug can be [configured](../../application/configuration/configuring.md) using [environment variables](../../application/configuration/environment.md#debug-variables). If you are unable to debug then either use ENV or edit the source code to get debug on the screen as described in the next sections.

### Using ENV

You can enable error display by setting an environment variable in your server. **Note:** This variable is read from `$_ENV` (server context) not `app/env.php` (Chevereto app).

```sh
CHEVERETO_ENVIRONMENT=dev
```

### Editing source

You can enable error display by editing the source code to force display of debug information.

* Open `app/legacy/load/register-handlers.php`
* Change this:

```php
$isDebug = isDebug();
```

* To this:

```php
//$isDebug = isDebug();
$isDebug = true;
```

## Debug level

::: warning Note on debug levels
Error level >= 2 is not recommended for production environments. Is not safe to print the errors to the screen, handle it with care.
:::

| Level (N) | Description                          |
| --------- | ------------------------------------ |
| 0         | No debug                             |
| 1         | (default) Debug to `log_device`      |
| 2         | Print errors (no logging)            |
| 3         | Print errors and log to `log_device` |

Use `CHEVERETO_DEBUG_LEVEL=N` to configure the debug level.

## Error log device

Use [`CHEVERETO_ERROR_LOG`](../../application/configuration/environment.md#error-logging-variables) to customize where error log will be written.

::: warning Permissions
Double-check that the target log device is writable by the user running PHP.
:::

## Finding the logs

This vary depending the server provider and how PHP runs in the server. In doubt, always ask first to your system administrator.

* XR Debug
  * Streams the debug messages to the XR Debug session
* Chevereto
  * Logs by default at `php://stderr`
* Apache
  * Logs by default at `/var/log/apache2/error.log`
  * Virtual host directive defines custom error log location
  * Commonly configured for `/var/www/domain.com/logs`
* NGINX
  * Logs by default at `/var/log/nginx/error.log`
  * Server block defines custom error log location
  * Commonly configured for `/var/www/domain.com/logs`
* cPanel
  * Logs by default at `../domain.com.error.log` (parent of `public_html` folder)
  * Vary a lot from providers and cPanel version
* Docker
  * Logs to `/dev/stderr`

### I can't find the logs

You can configure `CHEVERETO_DEBUG_LEVEL` >= 2 but note that this error reporting level **could compromise** your installation. Restrict any public access to your website and revert to `CHEVERETO_DEBUG_LEVEL=1` as soon as possible.

If you can't find the logs or you are having a hard time with this you can request [Extra Support](https://chevereto.com/support) so we can safely debug your installation.
