# Installation

::: tip Installation service available
We offer a [paid installation service](https://chevereto.com/support) for Chevereto. We will install Chevereto for you, including all the requirements and configurations.
:::

Installation refers to the process where the **software files** gets provided in the target machine.

## Stack

Chevereto requires [PHP](../stack/php.md), a [Web Server](../stack/web-server.md), [MySQL database](../stack/mysql-server.md) and [CRON](../stack/cron.md).

## Official guides

For fresh installations continue with one of the following guides.

* Docker
  * [Docker](../../guides/docker/README.md)
  * [Pure Docker](../../guides/docker/pure-docker.md)
* [VPS](../../guides/server/vps.md)
* [cPanel](../../guides/cpanel/README.md)
* [Plesk](../../guides/plesk/README.md)

## Community guides

The following guides have been contributed by users of the software.

* [Synology NAS](https://mariushosting.com/how-to-install-chevereto-on-your-synology-nas/) (Portainer)

## Marketplace

Chevereto is available at the following application marketplaces.

* [DigitalOcean Marketplace](https://chevereto.com/go/digitalocean)
* [Vultr Marketplace](https://chevereto.com/go/vultr)

## Using installer software

Chevereto is available at the following installers, look for the following software at your hosting control panel.

* [EasyPanel](https://easypanel.io/docs/templates/chevereto)
* [Installatron](https://installatron.com/chevereto)
* [Softaculous](https://www.softaculous.com/apps/galleries/Chevereto)
* [SwiftWave](https://swiftwave.org/docs/dashboard/swiftwave_app_store/)

## Using release package

The release package is a `zip` file containing the software files.

* Paid edition package available at your [client panel](https://chevereto.com/panel/downloads).
* Free edition package available at [chevereto/chevereto](https://github.com/chevereto/chevereto/releases).

### Manual (CLI)

Run the following [command](https://github.com/chevereto/vps#get) to download and extract package:

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

Setup refers to the process when the Chevereto database tables and its admin user is created. You can carry this process in [HTTP](#install-gui) or [CLI](#install-cli) context.

### Install (GUI)

* Go to `/install`

### Install (CLI)

* Refer to [CLI install](../reference/cli.md#install).
