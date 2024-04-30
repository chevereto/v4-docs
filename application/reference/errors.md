# Errors

Chevereto application errors can happen by several causes, including server issues. In a multi-layered system like this is crucial to understand when an error is caused by Chevereto and not *something else*.

## Chevereto related?

Chevereto **won't cause** any of the following issues:

* Unable to connect (network issues)
* Database server gone
* CORS (missing icons, fonts)
* Cookies/Sessions not working (login issues)
* Restricted functions (`set_time_limit`)
* Server restrictions (`mod_security`)
* Wrong handling the user real connecting IP

To determine if an issue is Chevereto related may be complicated for most users. We recommend purchasing [Extra Support](https://chevereto.com/panel/support) if the issue needs urgent attention in your organization.

## Incident id

Chevereto logs all error events under an unique random incident id. This enables to to lookup the error in the log device.

The id is randomly generated and is unique per error event.

## Something went wrong

This error spawns on **production** context, the actual cause of this error is **hidden from visitors by design** to don't expose any sensitive debug info to end-users.

> Something went wrong
> Please try again later. If the problem persist don't hesitate to contact the system administrator.

**Note:** *You are the system administrator*.

This [silent message](https://chevere.github.io/throwable-handler/demo/output/html-silent.html) indicates an error caught by Chevereto, but without disclosing the actual cause of error.

* Go to **Dashboard > Settings > System** and enable [Debug errors](https://v4-admin.chevereto.com/settings/system.html#debug-errors) to print the error message to administrators.
* Learn more at [Debug](../../developer/how-to/debug.md) to retrieve these errors from the [configured log device](../configuration/environment.md#error-logging-variables).

## Exception thrown

This error spawns in development context.

The [exception message](https://chevere.github.io/throwable-handler/demo/output/html.html) indicates an error caught by Chevereto fully disclosing the actual cause of error.

Although the message doesn't leak function arguments neither variables, you should handle these messages with the same discretion as a password.

### Dumped update query

The update query gets dumped either because [dump update query](https://v4-admin.chevereto.com/settings/system.html#dump-update-query) setting is enabled or because the database has more than 1,000,000 records plus carrying the update process in HTTP context.

If at `/update` you see a message which reads `# Dumped update query (...)` it means that you **must** run the [CLI update command](cli.md#update). You can also run the printed statements in the database client software of your choice.

### HTTP 500 - Internal Server Error

A generic error response emitted by the [web server](../stack/web-server.md), indicates the existence of an error but it doesn't specify any concrete explication for it.

As these may spawn in any layer, check the system [error log](../../developer/how-to/debug.md#finding-the-logs) device to determine if it is triggered in the application layer. If is not there then check for the error log for your web server.

Refer to your web server provisioning documentation for retrieving its logs.
