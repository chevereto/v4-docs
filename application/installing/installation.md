# 📦 Installation

This section outlines the install process required for new Chevereto V4 instances.

::: tip 😊 Installation service
We do offer paid installation service at [Extra Support](https://chevereto.com/support). Get your Chevereto installed directly from the author.
:::

## Using VPS

Check [chevereto/vps](https://github.com/chevereto/vps) for a complete overview of our VPS provisioning, which you can freely use with any hosting provider.

## Using Docker

Refer to [🐋 Docker](../../guides/docker/README.md) for our container provisioning.

## Using release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready for [Setup](#setup).

### Manual (CLI)

This method is recommended for servers with **shell access**.

* Run the following command

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/common/get.sh)
```

### Manual (GUI)

This method is recommended for **cPanel**, **Plesk** and all other **web panel** users.

* Upload the [latest release](https://chevereto.com/panel/downloads) to a non-public path in your server
  * Use normal release package (non-lite)
* Unzip the package in the target website directory (`public_html` folder)
* Remove the `.zip` file
* Open your target website URL and follow the [Setup](#setup) instructions

Some web hosting panels can ease the filesystem provisioning. Use the web panel built-in file manager to provide and extract the Chevereto package.

* [📂 cPanel App files](../../guides/cpanel/app-files.md)

## Setup

Setup refers to the process when the Chevereto database tables and its admin user is created. You can carry this process in [HTTP](#http-setup) or [CLI](#cli-install) context.

### HTTP setup

* Go to `/install`

### CLI install

* Refer to [CLI install](../reference/cli.md#install).
