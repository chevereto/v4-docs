# PHP

| Version | PHP      |
| ------- | -------- |
| 4.4     | 8.1, 8.2 |
| 4.3     | 8.1, 8.2 |
| 4.2     | 8.1, 8.2 |
| 4.1     | 8.0, 8.1 |
| 4.0     | 8.0, 8.1 |

> **Note:** PHP versions explicitly listed in the table above are officially supported. Using any other PHP version may result in unexpected behavior or compatibility issues.

Chevereto V4 is [PHP](https://php.net/) software, it has been designed using:

* [Chevere](https://chevere.org/) packages
* [PHP packages](https://deb.sury.org/) from Ondřej Surý.
* [PHP extensions](https://www.php.net/manual/en/extensions.membership.php) provided by [PECL](https://pecl.php.net/).

Packages and PECL provides the same convenience, but as packages are made for debian-based systems, you should prefer PECL if you don't have a debian-compatible system.

## Resources

* [PHP Website](https://php.net)
* [PHP Language reference](https://php.net/langref)
* [PHP Function reference](https://php.net/funcref)

## What it does?

PHP is the programming language used to write Chevereto application instructions, it is used for everything as it provides high flexibility to alter instructions on-the-fly at a minimum system performance footprint.

## Troubleshoot

Having issues? Check the following common pitfalls:

* Outdated PHP version
* Misconfiguration in PHP libraries
* Bad php.ini directives
* Low execution time
* Bad sessions setup
* Open basedir restrictions

## Configuration

The following `ini` values are recommended for Chevereto installations.

**Note:** Check which `ini` files are loaded at your Chevereto `/dashboard`.

```sh
upload_max_filesize = 64M;
post_max_size = 64M;
max_execution_time = 30;
memory_limit = 512M;
```

| Property            | Description                                      | Example             |
| ------------------- | ------------------------------------------------ | ------------------- |
| upload_max_filesize | Maximum upload size                              | `64M` for 64 MB     |
| post_max_size       | Maximum post size                                | Same as above       |
| max_execution_time  | Maximum time to execute the software, in seconds | `30` for 30 seconds |
| memory_limit        | Maximum memory to allocate                       | `512M` for 512 MB   |

You can toggle this limits to reflect your hardware and server load. Check this article for more info: [PHP common pitfalls](http://www.php.net/manual/en/features.file-upload.common-pitfalls.php).

## Extensions

The following PHP extensions are required for Chevereto.

* curl
* exif
* fileinfo
* gd
* hash
* imagick
* json
* pdo
* pdo-mysql
* session
* xml

## Features

Chevereto requires unrestricted access to **all PHP functions**. Note that the following functions **should not** be restricted:

* [set_time_limit](https://www.php.net/set-time-limit)

## Image library

The image library (GD, Imagick) should be provided with support for `PNG GIF JPG BMP WEBP`. By default, Chevereto prefers Imagick and fallback to GD.

If you need to explicit use GD you can pass this [ENV](../configuration/environment.md#image-handling-variables):

```php
CHEVERETO_IMAGE_LIBRARY=gd
```

If the server doesn't provide support for all the image formats handled by Chevereto, the ENV must reflect only the system supported formats. In the following example Chevereto is configured with explicit support only for PNG, GIF, BMP and JPG (removes WEBP):

```php
CHEVERETO_IMAGE_FORMATS_AVAILABLE='["JPG","PNG","BMP","GIF"]'
```

### Configuring ImageMagick

Additional recommended ImageMagick configuration at `/etc/ImageMagick-6/policy.xml` file:

```xml
<policymap>
    <!-- policies -->
    <policy domain="resource" name="width" value="16KP"/>
    <policy domain="resource" name="height" value="16KP"/>
</policymap>
```

## Filesystem

User running `php` must be in the **owner group** of the installation directory and Chevereto requires recursive **read** access to that directory. In addition to this, following paths require recursive **read/write** access:

* Session path
* Temp folder
* ./content
* ./images
* ./importing

User generated content is stored at:

* ./images
* ./content/images/users
* ./content/pages

In **debian-based** systems use the following command to set the right permissions in your Chevereto installation (change `/var/www/html` to reflect your path).

```sh
chown -R www-data: /var/www/html
```
