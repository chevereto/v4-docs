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

👉 This method is the standard for **development** and required for **bug tracking**

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

These methods consists in to provide the application files in a file system compatible with the following requirements:

* [PHP 8.0](https://www.php.net/releases/8.0)
* Web Server ([Apache HTTP Web Server](https://httpd.apache.org/), [NGiNX](https://nginx.org/))
* Database ([MySQL](https://www.mysql.com/), [MariaDB](https://mariadb.org/))

### Using Release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be used.

👉 This method is recommended for **cPanel**, **Plesk** and other web panel users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to your server (usually in the `public_html` folder)
* Unzip the software using your server built-in `unzip` utility
* Remove the `.zip` file
* Open your target website URL and follow the instructions

### Using Composer package manager

Using Composer the installation carried in CLI context. It requires:

* CLI with `curl`, `unzip`
* [Composer](https://getcomposer.org/)

👉 This method is recommended for **VPS** and machines with **CLI access**.

* Create a project folder in your server (usually the `public_html` folder)
* Run the following command from your project folder
  * Replace `YOUR_V4_LICENSE_KEY` with your [license key](https://chevereto.com/panel/license)

<code-group>
<code-block title="Debian">
```sh
LICENSE=YOUR_V4_LICENSE_KEY &&
curl -f -SOJL \
    -H "License: $LICENSE" \
    "https://chevereto.com/api/download/4-lite" \
&& unzip chevereto*.zip \
&& composer install \
&& chown www-data: . -R
```
</code-block>
</code-group>

### Dotenv configuration

✨ To configure the database connection and all the other system environment variables Chevereto uses a `.env` file at the root of your project.

* Copy `.env.example` to `.env`
* Modify the values according to your system needs

The minimum `.env` file contents you will require to configure are the following:

```plain
CHEVERETO_DB_HOST=database
CHEVERETO_DB_NAME=chevereto
CHEVERETO_DB_PASS=user_database_password
CHEVERETO_DB_PORT=3306
CHEVERETO_DB_USER=chevereto
CHEVERETO_DB_TABLE_PREFIX=chv_
```
