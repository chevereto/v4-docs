# Installation

If you want to run Chevereto on your own server, you need to install the self-hosted software.

::: tip Installation service
Get our [Chevereto installation service](https://chevereto.com/support) and we'll handle the installation, requirements, and configuration for you.
:::

## Install using Docker

Docker is the recommended way to install Chevereto as it simplifies the process and provides a consistent environment.

* [Chevereto Docker](../../guides/docker/README.md) (all-in-one, multi-website setup)
* [Chevereto Pure Docker](../../guides/docker/pure-docker.md)

## Install using VPS

If you prefer to install Chevereto on a VPS (Virtual Private Server), you can follow the guides below.

* [Chevereto VPS](../../guides/server/vps.md)
* [Chevereto cPanel](../../guides/cpanel/README.md)
* [Chevereto Plesk](../../guides/plesk/README.md)

You can also install Chevereto using installer software available in many hosting control panels. Look for the following options:

* [Chevereto at EasyPanel](https://easypanel.io/docs/templates/chevereto)
* [Chevereto at Installatron](https://installatron.com/chevereto)
* [Chevereto at Softaculous](https://www.softaculous.com/apps/galleries/Chevereto)
* [Chevereto at SwiftWave](https://swiftwave.org/docs/dashboard/swiftwave_app_store/)

## Install using Synology NAS

If you are using a Synology NAS, you can follow the guide below to install Chevereto:

* [Chevereto Synology NAS](https://mariushosting.com/how-to-install-chevereto-on-your-synology-nas/) (Portainer)

## Install using release package

The release package is a ZIP file that contains the application source code and all required dependencies. To install using the release package implies to download the package and extract it in the target website directory.

### Manual installation (CLI)

Run the following command to download and extract the package in your current working directory. You will be prompted for a license key; if you don't provide one, the free edition will be downloaded.

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.3/common/get.sh)
```

### Manual installation (GUI)

* Download chevereto release package:
  * [Paid edition](https://chevereto.com/panel/downloads)
  * [Free edition](https://github.com/chevereto/chevereto/releases)
* Unzip the package in your local machine
* Upload all the files from the unzipped release package to your target website directory, usually a folder named `public_html`
* Open your target website URL and follow the [Setup instructions](#setup)

## Setup

After provisioning the software files, Chevereto is ready for setup. This step is only required the first time and creates the database tables and admin user.

* Setup via HTTP

  Open your website URL in a web browser and follow the setup instructions. The setup will guide you through the process of configuring your database and first admin user.

* Setup via CLI

  Run the [install command](../reference/cli.md#install) in your terminal to start the setup process:

  ```sh
  app/bin/cli -C install <options>
  ```
