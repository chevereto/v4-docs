# 📦 Installation

## Using Docker

Docker provisioning is all-included. No need to worry about PHP, Web Server or any other system layer dependency. Requires [Docker](https://docs.docker.com/get-docker/).

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

::: tip Docker instructions
Check [COMPOSE.md](https://github.com/chevereto/docker/blob/4.0/docs/COMPOSE.md) for more instructions.
:::

## Other methods

You will require to install MySQL and bind the project path to the HTTP Web Server.

### Using Composer

Composer will provide the installation of Chevereto and its dependencies. Requires `curl`, `unzip` and [Composer](https://getcomposer.org/).

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

### Using the Installer

The [Installer](https://github.com/chevereto/installer) is a single-file tooling that interacts with the Chevereto API to automate the software installation process.

* Upload the [installer.php](https://chevereto.com/download/file/v4-installer) file to your target folder.

```sh
curl -SLo installer.php "https://chevereto.com/download/file/v4-installer"
```

* Navigate to the installer URL which is at `https://your_website/installer.php` and follow the steps.

### Dotenv configuration

If you can't provide the [environment variables](https://v3-docs.chevereto.com/setup/system/environment.html) at server layer you can use a `.env` file at the root of your project.

* Copy `.env.example` to `.env`
* Modify the values according to your system

For the most basic `.env` file contents you will require to configure just the following:

```plain
CHEVERETO_DB_HOST=database
CHEVERETO_DB_NAME=chevereto
CHEVERETO_DB_PASS=user_database_password
CHEVERETO_DB_USER=chevereto
```
