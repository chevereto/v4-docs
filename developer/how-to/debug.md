# 🐞 Debug

Debug enables to dump information about errors that may be affecting the software functionality.

👉 If Chevereto isn't working properly it will require debugging to understand the situation.

## XR Debug

<p><img alt="XR Debug" width="17%" class="float-left margin-right-1em" src="../../src/products/xr/logo.svg"></p>

👏 Chevereto V4 includes **built-in support** for [XR Debug](https://xr-docs.chevere.org), an Open Source remote debugger for PHP also made by us.

You can [enable XR Debug](../../admin/dashboard/system.md#enable-xr) server to get live debug messages, enabling you to save/export those for handling it over when [requesting help](troubleshoot.md#getting-help).

## Configuring debug

Debug can be [configured](../../application/configuration/configuring.md) using [environment variables](../../application/configuration/environment.md#debug-variables).

### Debug level

Depending on the work context debug needs to be configured accordingly.

::: warning Note on debug levels
Error level >= 2 is not recommended for production environments. Is not safe to print the errors to the screen, handle it with care.
:::

| Level (N) | Description                          |
| --------- | ------------------------------------ |
| 0         | No debug                             |
| 1         | Debug to `log_device`                |
| 2         | Print errors (no logging)            |
| 3         | Print errors and log to `log_device` |

Use `CHEVERETO_DEBUG_LEVEL=N` to configure the debug level.

### Log device

Configure your own error log device to control where the logs will be sent. If you don't alter this it will fallback to the default system log device.

💡 Containers will always log to `/dev/stderr` regardless this setting.

Use `CHEVERETO_ERROR_LOG=log_device` to configure where logs will be sent.

## Accessing logs

👉 If you don't configure [log device](#log-device) Chevereto will follow the default [error_log](https://www.php.net/manual/errorfunc.configuration.php#ini.error-log) handling configured for your PHP installation.

### Where are the default logs?

This vary depending the server provider and how PHP runs in the server. In doubt, check/ask first to your system administrator.

* PHP
  * Logs by default at `syslog`
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

You can configure `CHEVERETO_DEBUG_LEVEL` >= 2 but note that such error reporting level **could compromise** your installation. Restrict any public access to your website and revert back to `CHEVERETO_DEBUG_LEVEL=1` as soon as possible.

If you can't find the logs or you are having a hard time with this you can request [extra support](https://chevereto.com/support) so we can safely debug your installation.

### Reading logs

Logs can be easily accessed by direct file access or by running commands accordingly.

<code-group>
<code-block title="Shell">
```sh
tail -f /var/log/apache2/error.log | sed 's/\\n/\n/g'
```
</code-block>

<code-block title="Docker">
```sh
docker logs -f container-name | sed 's/\\n/\n/g'
```
</code-block>
</code-group>

## Error reporting

👉 To enable this is recommended **only** in development environments.

To enable printed error reporting you will need to go to [system settings](../../admin/dashboard/system.md). By enabling this all the runtime errors will be printed which means that they will be visible.
