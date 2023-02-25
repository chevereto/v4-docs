# 📦 Installation

Installation refers to the process where the **software files** gets provided in the target machine.

## Requirements

To run Chevereto it will require [PHP](../stack/php.md), [Web Server](../stack/web-server.md), [MySQL database](../stack/mysql-server.md) and [CRON](../stack/cron.md).

## Installation guides

For fresh installations continue with one of the following guides:

* [🐋 Docker](../../guides/docker/README.md) for installing our container-based provisioning.
* [🏝 VPS](../../guides/server/vps.md) for private servers.
* [🎛 cPanel](../../guides/cpanel/README.md) for cPanel servers.
* [🎛 Plesk](../../guides/plesk/README.md) for Plesk servers.

## Using release package

The release package is a `zip` file containing the software files.

* 👑 Paid edition package available at your [client panel](https://chevereto.com/panel/downloads).
* 💡 Free edition package available at [chevereto/chevereto](https://github.com/chevereto/chevereto/releases).

### Manual (CLI)

Run the following [command](https://github.com/chevereto/vps#get) to download and extract Chevereto package:

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/common/get.sh)
```

### Manual (GUI)

* Upload the latest release to a non-public path in your server
* Unzip the package in the target website directory (`public_html` folder)
* Remove the `.zip` file
* Open your target website URL and follow the [Setup](#setup) instructions

## Setup

Once the software files are provided the software is ready for [Setup](#setup). This is required only once per instance.

Setup refers to the process when the Chevereto database tables and its admin user is created. You can carry this process in [HTTP](#http-setup) or [CLI](#cli-install) context.

### HTTP setup

* Go to `/install`

### CLI install

* Refer to [CLI install](../reference/cli.md#install).
