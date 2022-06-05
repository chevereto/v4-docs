# 📦 Installation

Chevereto runs on any compatible system but keep in mind: 💡 **Our software support doesn't include third-party provisioning systems**. Paid extra support will be required to address these issues.

## Using VPS

Check [chevereto/vps](https://github.com/chevereto/vps) for a complete overview of our VPS provisioning.

## Using Docker

Refer to [🌎 Docker Production](../../guides/docker/production.md) and [🛸 Docker Bootstrap](../../guides/docker/bootstrap.md) for our container provisioning.

## Using release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be installed.

This method is recommended for **cPanel**, **Plesk** and all other **web panel** users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to a non-public path in your server
  * Use normal release package (non-lite)
* Unzip the software using your server built-in `unzip` utility in the target website directory (usually the `public_html` folder)
* Remove the `.zip` file
* Open your target website URL and follow the [Setup](#setup) instructions

## Using panels

Web panels can ease the system provisioning for you as all the requirements are provided by the web panel software.

* [📂 cPanel App files](../../guides/cpanel/app-files.md)

## Using Composer

Using Composer the installation carried in CLI context where the software is downloaded and its dependencies are installed on the fly. It requires:

* CLI with `curl`, `unzip`
* [Composer](https://getcomposer.org/)

✨ You may want to give it a try to [install.sh](https://github.com/chevereto/vps/tree/4.0#install)

* Create a project folder in your server (usually the `public_html` folder)
* Modify and run the command below

💡 Replace `YOUR_V4_LICENSE_KEY` with your [license key](https://chevereto.com/panel/license)

<code-group>
<code-block title="Debian">
```sh
LICENSE=YOUR_V4_LICENSE_KEY &&
curl -f -SOJL \
    -H "License: $LICENSE" \
    "https://chevereto.com/api/download/4-lite" \
&& unzip chevereto*.zip \
&& rm -rf chevereto*.zip \
&& composer install \
    --working-dir=app \
    --prefer-dist \
    --classmap-authoritative \
    --ignore-platform-reqs \
&& chown www-data: . -R
```
</code-block>
</code-group>

* Once done, open your target website to proceed with [Setup](#setup).

## Setup

Setup refers to the process when the Chevereto database tables and its admin user is created. You can carry this process in HTTP or CLI context.

### HTTP setup

* Login as Admin
* Go to `/install`

### CLI install

Refer to [CLI install](../reference/cli.md#install).
