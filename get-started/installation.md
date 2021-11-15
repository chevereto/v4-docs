# 📦 Installation

::: tip
Our Docker and VPS provisioning are all-included. No need to worry about PHP, Web Server or any other system layer dependency.
:::

## Using VPS

* Requires Ubuntu 20.04 LTS VPS

👉 Recommended for **production systems**.

::: tip
Check [chevereto/vps](https://github.com/chevereto/vps) for a complete overview of our VPS provisioning.
:::

* Login to your VPS
* Run the following command

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/bash.sh)
```

* Click on the URL at the end of the process

## Using Docker

* Requires [Docker](https://docs.docker.com/get-docker/)

👉 Recommended for **development** and **bug tracking**

::: tip
Check [chevereto/docker](https://github.com/chevereto/docker) for a complete overview of our Docker provisioning.
:::

* Create a project folder and store [httpd-php.yml](https://raw.githubusercontent.com/chevereto/docker/4.0/httpd-php.yml) there
* Run the following command from your project folder
  * Replace `YOUR_V4_LICENSE_KEY` with your [license key](https://chevereto.com/panel/license)

```sh
LICENSE=YOUR_V4_LICENSE_KEY \
docker-compose \
    -p chevereto-v4 \
    -f httpd-php.yml \
    up --abort-on-container-exit
```

Chevereto will be available at [localhost:8840](http://localhost:8840)

## Other methods

For other methods you need to provide the application files in a system compatible with the requirements listed below.

* Requires:
  * [PHP 8.0](https://www.php.net/releases/8.0) - (link PHP extensions)
  * Web Server ([Apache HTTP Web Server](https://httpd.apache.org/), [NGiNX](https://nginx.org/))
  * Database ([MySQL](https://www.mysql.com/), [MariaDB](https://mariadb.org/))

### Using Release package

The release package consists in a `zip` file containing the software files. Once extracted, the software is ready to be used.

👉 This method is recommended for **cPanel** and **Plesk** users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to your server (usually in the `public_html` folder)
* Unzip the software using your server built-in `unzip` utility
* Remove the `.zip` file
* Open your target website URL and follow the instructions

### Using Composer

* Requires:
  * CLI with `curl`, `unzip`
  * [Composer](https://getcomposer.org/)

Composer will provide the installation of Chevereto and its dependencies in CLI context.

👉 This method is recommended for VPS and machines with CLI access.

* Create a project folder
* Run the following command from your project folder
  * Replace `YOUR_V4_LICENSE_KEY` with your [license key](https://chevereto.com/panel/license)

```sh
LICENSE=YOUR_V4_LICENSE_KEY &&
curl -f -SOJL \
    -H "License: $LICENSE" \
    "https://chevereto.com/api/download/4-lite" \
&& unzip chevereto*.zip \
&& composer update
```

## Dotenv configuration

**Note:** In Docker the environment is provided at container runtime.

Use a `.env` file at the root of your project to configure the environment vars.

* Copy `.env.example` to `.env`
* Modify the values according to your system

The basic `.env` file contents you will require to configure are the following:

```plain
CHEVERETO_DB_HOST=database
CHEVERETO_DB_NAME=chevereto
CHEVERETO_DB_PASS=user_database_password
CHEVERETO_DB_PORT=3306
CHEVERETO_DB_USER=chevereto
CHEVERETO_DB_TABLE_PREFIX=chv_
```
