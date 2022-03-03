# 🪶 Web Server

* Requires an HTTP web server, like [Apache HTTP Server](https://httpd.apache.org/), [Nginx](https://nginx.org/) or _any_ compatible with PHP.

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
