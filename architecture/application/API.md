# 🌎 API

`🚧 Work in progress`

The Chevereto V4 API is how the application communicates with its _users_.

## Self-exposed API

Chevereto V4 API is self-exposed, it enables client-devices to understand and adapt better to the changes in your installation.

::: tip
Review [Chevere Spec](https://chevere.org/components/Spec.html) to understand how the self-exposed API works.
:::

## Acknowledges

* APIs in Chevereto V4 are designed to change.
* Is encouraged from client implementations to be able to automatically react to changes in the API.
* Access to APIs can be made using HTTP, WebSockets and direct CLI

## HTTP API

`🚧 Work in progress`

## CLI API

Chevereto V4 includes a built-in console for CLI API access.

* Requires [PHP](https://chevere.org/architecture/development/system.html#php) installed in your system `PATH`.

```sh
/chevereto/bin --help 
```
