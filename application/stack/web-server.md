# 🪶 Web Server

* Requires an HTTP web server, like [Apache HTTP Server](https://httpd.apache.org/), [Nginx](https://nginx.org/) or any server compatible with PHP.

## Apache HTTP server

Module [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) must be enabled. Virtual host settings must allow URL rewriting:

```apacheconf
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Require all granted
    </Directory>
```

💡 Apache configuration `.htaccess` files are already included in the software.

### Restrict direct access to PHP files

Must edit the [Virtual Host](https://httpd.apache.org/docs/2.4/vhosts/) entry by adding the following directive for the upload directory. This will disable PHP interpreter on folders containing public uploaded content:

> Change `/var/www/html/images` to reflect the actual upload directory.

```apacheconf
<Directory /var/www/html/images>
    AllowOverride None
    <FilesMatch "\.(?:[Pp][Hh][Pp][345]?|[Pp][Hh][Tt][Mm][Ll])|(po|sql|html?)$">
        <IfModule !mod_authz_core.c>
            Order Allow,Deny
            Deny from all
        </IfModule>
        <IfModule mod_authz_core.c>
            Require all denied
        </IfModule>
    </FilesMatch>
    <IfModule mod_php7.c>
        php_flag engine off
    </IfModule>
    <FilesMatch ".+\.*$">
        SetHandler !
    </FilesMatch>
    <IfModule mod_rewrite.c>
        RewriteRule ^.*\.php$ - [F,L]
    </IfModule>
</Directory>
```

In system without access to Apache Virtual Host it is recommended to use a `.htaccess` file in the alleged paths:

```apacheconf
<FilesMatch "\.(?:[Pp][Hh][Pp][345]?|[Pp][Hh][Tt][Mm][Ll])|(po|sql|html?)$">
    <IfModule !mod_authz_core.c>
        Order Allow,Deny
        Deny from all
    </IfModule>
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
</FilesMatch>
<IfModule mod_php7.c>
    php_flag engine off
</IfModule>
<FilesMatch ".+\.*$">
    SetHandler !
</FilesMatch>
<IfModule mod_rewrite.c>
    RewriteRule ^.*\.php$ - [F,L]
</IfModule>
```

## NGINX

`nginx.conf` for `server {}` block:

```nginx
    # Disable access to sensitive application files
    location ~* (app|content|lib)/.*\.(po|php|lock|sql)$ {
        return 404;
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
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    }
```

## Real connecting IP

For setups under any kind of proxy (including [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs)) is required that the web server sets the appropriate value for the client connecting IP.

::: danger
If real connecting IP is not configured Chevereto won't be able to detect the real visitors IPs, failing to deliver IP based restrictions and flood control.
:::

* NGINX: `ngx_http_realip_module`
* Apache HTTP Server: `mod_remoteip`
