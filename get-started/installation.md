# 📦 Installation

## Using Docker

Docker provisioning is all-included. No need to worry about PHP, Web Server or any other system layer dependency.

* Install [Docker](https://docs.docker.com/get-docker/)
* Create a project folder and store [httpd-php.yml](https://raw.githubusercontent.com/chevereto/docker/4.0/docker-compose/httpd-php.yml) there
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
Check [COMPOSE.md](https://github.com/chevereto/docker/blob/4.0/COMPOSE.md) for more instructions.
:::

## Other methods

You will require to install MySQL and bind the project path to the HTTP Web Server.

### Using Composer

Composer will provide the installation of Chevereto and its dependencies.

* Install [Composer](https://getcomposer.org/)
* Create a project folder
* Run the following command from your project folder
  * Replace `YOUR_V4_LICENSE_KEY` with your [license key](https://chevereto.com/panel/license)
  * Replace `VERSION_TAG` with the target version to install (i.e. `4.0`)

```sh
LICENSE=YOUR_V4_LICENSE_KEY &&
VERSION=VERSION_TAG &&
composer create-project chevereto/v4 . \
    --repository='{
        "type": "package",
        "package": {
            "name": "chevereto/v4",
            "version": "'${VERSION}'",
            "dist": {
                "url": "https://chevereto.com/api/download/'${VERSION}'-dev/?license='${LICENSE}'",
                "type": "zip"
            }
        }
    }'
```

### Using the Installer

The [Installer](https://github.com/chevereto/installer) is a single-file tooling that interacts with the Chevereto API to automate the software installation process. This method should be used only if unable to run Composer.

`🚧 Work in progress`
