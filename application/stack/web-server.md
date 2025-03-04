# Web Server

Chevereto requires an HTTP web server compatible with PHP. It provides official support (when using our configuration) for Apache HTTP Server and Nginx.

:::tip Alternative web servers
Any web server capable of forwarding FastCGI can be used to deploy Chevereto, but we don't provide the webserver configuration. You are encouraged to try translating `.htaccess` rules to your server realm, if you need help don't hesitate to ask us directly.
:::

## Resources

* [Apache HTTP Server](https://httpd.apache.org/)
* [Nginx](https://nginx.org/)

## What it does?

The web server exposes the Chevereto application using the HTTP(s) protocol.

## Troubleshoot

Having issues? Check the following common pitfalls:

* Apache `mod_rewrite` disabled or `Allow Override All` missing in virtual hosts
* Missing writing permissions in Chevereto paths
* Bad or invalid setup (timezone, multi-views, timeout, etc.)
* Wrong nginx server block / PHP-FPM issues
* `mod_security` or any other artifact blocking requests from/to

## Restrict PHP

::: danger
Chevereto restricts access exclusively to `index.php` and it forbids access to any other PHP file.
:::

Built-in [Apache HTTP server](#apache-http-server) config (`.htaccess`) and provided [Nginx](#nginx) config for **Chevereto restricts access to PHP files**. Only `/index.php` is allowed to process PHP requests. This is a security measure to prevent execution of arbitrary files that an attacker or third-party may nest in the Chevereto application filesystem.

## Real connecting IP

::: danger
If real connecting IP is not configured Chevereto won't be able to detect the real visitors IPs, failing to deliver IP based restrictions and flood control.
:::

For setups under a proxy is required that the web server sets the appropriate value for the client connecting IP.

Refer to the following resources when requiring to configure real connecting IP:

* Apache HTTP Server: `mod_remoteip`
* nginx: `ngx_http_realip_module`
* [Guides for CloudFlare](https://developers.cloudflare.com/support/troubleshooting/restoring-visitor-ips/restoring-original-visitor-ips/) (make sure to setup the appropriate [IP ranges](https://www.cloudflare.com/ips/))

## Apache HTTP server

Apache configuration `.htaccess` files are included in Chevereto files. The only requirement is to enable module [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html).

Virtual host settings must allow URL rewriting.

```apacheconf
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>
```

## nginx

This is the **recommended** `nginx.conf` for `server {}` block.

```nginx
    # Deny access to sensitive stuff
    location ~* ^/(app|importing)/ {
        deny all;
        return 404;
    }
    location ~* ^/(images|content)/ {
        fastcgi_pass off;
        default_type "";
        location ~* \.(php[345]?|phtml|html?)$ {
            deny all;
            return 403;
        }
    }
    location ~* composer\.json|composer\.lock|.gitignore$ {
        return 404;
    }
    location ~* /\.ht {
        return 404;
    }

    # Image not found replacement
    location ~* \.(jpe?g|png|gif|webp)$ {
        log_not_found off;
        error_page 404 /content/images/system/default/404.gif;
    }

    # CORS header (avoids font rendering issues)
    location ~* \.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js)$ {
        add_header Access-Control-Allow-Origin "*";
    }

    # PHP front controller
    location / {
        index index.php;
        try_files $uri $uri/ /index.php$is_args$query_string;
    }

    # Single PHP-entrypoint (disables direct access to .php files)
    location ~* \.php$  {
        internal;
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }
```
