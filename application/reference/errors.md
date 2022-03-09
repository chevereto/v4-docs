# 😖 Errors

Chevereto errors can be caused by several causes, including software errors and server incompatibilities. Understanding in which layer the error is affecting the system functionality will drive towards an easy outcome.

👉 In a multi-layered system like Chevereto is crucial to understand when an error is caused by Chevereto and not *something else*. Our support covers software issues, not third-party server provisioning.

## Error example

`🚧 Work in progress - show demo`

## Error Id

✅ Chevereto logs all error events under a unique **errorId** associated with the error stack trace and debug information.

```plain
<some code>: ** errorId #dacb7f96fb9fd28d **
```

Errors in Chevereto **are hidden by default**, the public part is the error identifier. Errors won't be displayed for security reasons and the error identifier is a randomly generated unique identifier per error event.

✅ In no situation the error id will provide any relevant information about the error happening.

💡 The error id exists for lookup for that error in the system error log device.

## Stack Trace

All errors include the full call stack trace. This is a list of files accessed to process the application logic.

`🚧 Work in progress - show photo`

## It is Chevereto related?

Chevereto runs on top of many technologies working at the same time and any component of this stack could fail.

💡 It is likely that Chevereto **won't cause** any of the following issues:

* Unable to connect (network issues)
* MySQL server gone
* CORS (missing icons, fonts)
* Cookies/Sessions not working (permissions)
* Restricted functions (`set_time_limit`)
* Server restrictions (`mod_security`)
* Wrong handling the user real connecting IP

👉 To determine if an issue is Chevereto/System related may be complicated for most users. We recommend purchasing [Extra Support](https://chevereto.com/panel/support) if the issue needs urgent attention in your organization.

## Common errors

### HTTP 500 - Internal Server Error

This is a generic error response emitted by the web server layer and this it indicates the existence of an error, but it doesn't specify any concrete explication for it. As these errors may spawn in any layer, it is recommended to check the system [error log](../../developer/how-to/debug.md#accessing-logs) device.

💡 These errors must be debugged in the Web server layer, which will vary depending on the web server software. Always refer to your web server provisioning documentation.

👉 Once the cause for the HTTP 500 error is known, you can either solve the situation with our own means or [request help](../../developer/how-to/troubleshoot.md#getting-help) from us.

### Something went wrong

This message indicates an error caught by Chevereto, but hidden as per system settings. To know what is going on you have to either look for the [logged error](../../developer/how-to/debug.md#accessing-logs) against the provided error id or use [XR Debug](../../developer/how-to/debug.md#xr-debug) to catch the error as it happens.

`🚧 Work in progress - show demo`

### Database related

👉 If at `/install` you see a plain text message starting with `#Dumped update query` it means that you **MUST** manual run the printed queries in your MySQL console.

💡 If [dump update query](../../admin/dashboard/system.md#dump-update-query) setting is **enabled** or if the images table has **more than 1,000,000** records, Chevereto will dump the SQL statements required to carry the database update which must run direct in the MySQL console. Chevereto has this functionality to minimize breaking your large database as the process could take several minutes to complete.
