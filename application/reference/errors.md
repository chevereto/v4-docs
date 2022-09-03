# 😖 Errors

Chevereto application errors can happen by several causes, including server issues. In a multi-layered system like this is crucial to understand when an error is caused by Chevereto and not *something else*.

👏 We use the outstanding [ThrowableHandler](https://chevere.org/packages/throwable-handler) package to handle all the application layer errors.

## Incident id

Chevereto logs all error events under an **incident id** associated with the error stack trace and debug information. This enables to to lookup the error in the [configured log device](../configuration/environment.md#debug-variables).

The id is randomly generated and it is unique per error event.

## Error visibility

Errors message **is hidden by default** and only its [incident id](#incident-id) is public. It is recommended to don't show error messages unless in development context.

We recommend tailing the error log device when needing to verbose error messages.

## Chevereto related?

It is likely that Chevereto **won't cause** any of the following issues:

* Unable to connect (network issues)
* Database server gone
* CORS (missing icons, fonts)
* Cookies/Sessions not working (login issues)
* Restricted functions (`set_time_limit`)
* Server restrictions (`mod_security`)
* Wrong handling the user real connecting IP

To determine if an issue is Chevereto/System related may be complicated for most users. We recommend purchasing [Extra Support](https://chevereto.com/panel/support) if the issue needs urgent attention in your organization.

## Common errors

### Something went wrong

The [Something went wrong](https://chevere.github.io/throwable-handler/demo/output/html-silent.html) message indicates an error caught by Chevereto. This message **doesn't disclose** the actual cause of error, it is intended to be used in **production context**.

To determine what is the actual error you have to either look for the [logged error](../../developer/how-to/debug.md#accessing-logs) against the provided [incident id](#incident-id) or use [XR Debug](../../developer/how-to/debug.md#xr-debug) to catch the error as it happens.

### Exception thrown

The [Exception thrown](https://chevere.github.io/throwable-handler/demo/output/html.html) message indicates an error caught by Chevereto. This message **fully disclose** the actual cause of error, it is intended to be used in **development context**.

Although the message doesn't leak function arguments neither variables, you should handle these messages with discretion.

### Dumped update query

The update query gets dumped either because [dump update query](https://v4-admin.chevereto.com/settings/system.html#dump-update-query) setting is **enabled** or because the database has **more than 1,000,000** records plus carrying the update process in HTTP context.

If at `/update` you see a message which reads `# Dumped update query (...)` it means that you **must** run the [CLI update command](cli.md#update). You can also run the printed statements in the database client software of your choice.

### HTTP 500 - Internal Server Error

A generic error response emitted by the [web server](../stack/web-server.md), indicates the existence of an error but it doesn't specify any concrete explication for it.

As these may spawn in any layer, check the system [error log](../../developer/how-to/debug.md#accessing-logs) device to determine if it is triggered in the application layer. If is not there then check for the error log for your web server.

Refer to your web server provisioning documentation for retrieving its logs.
