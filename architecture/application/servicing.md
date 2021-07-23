# 🏭 Servicing

Chevereto V4 is designed to be provided in a persistent-system state, with an application runner in charge of driving context-aware runtime instructions.

## Operating System

Chevereto is build and tested on [Ubuntu](https://ubuntu.com/) `ubuntu-latest`. It inherits the [Chevere Operating System](https://chevere.org/architecture/development/system.html#operating-system) specifications.

## PHP

Refer to [Chevere PHP](https://chevere.org/architecture/development/system.html#php) for specifications on PHP runtime provisioning.

## MySQL Server

* Requires [MySQL Server](../stack/mysql-server.md)

## Web Server

* Requires an HTTP web server, like [Apache HTTP Server](https://httpd.apache.org/), [Nginx](https://nginx.org/) or _any_.

Point the Chevereto entry point to your web server PHP runner:

`🚧 Work in progress`

<code-group>
<code-block title="Apache" active>
```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [L]
```
</code-block>

<code-block title="Nginx">
```nginx
location / {
    index index.php;
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```
</code-block>
</code-group>
:::

## Redis

* Requires [Redis](../stack/redis.md)

