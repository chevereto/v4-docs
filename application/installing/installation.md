# 📦 Installation

✅ Our Docker and VPS provisioning comes all-included. No need to worry about any system layer dependency and we provide **active support** for those.

::: tip Runs anywhere (*)
Chevereto runs on any compatible system but keep in mind: 💡 **Our software support doesn't include third-party provisioning systems**. Paid extra support will be required to address these issues.
:::

## Using VPS

* Requires Ubuntu 20.04 LTS VPS

💡 Check [chevereto/vps](https://github.com/chevereto/vps) for a complete overview of our VPS provisioning.

👉 Recommended for production systems.

* Login to your VPS and run the following command

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/bash.sh)
```

* Click on the URL at the end of the process to proceed with [Initial Setup](#initial-setup).

## Using Docker

* Requires [Docker](https://docs.docker.com/get-docker/)

### Production

👉 Recommended for production systems.

Use [chevereto/container-builder](https://github.com/chevereto/container-builder) to create your own private Chevereto container image(s) which will be available in the container registry of your choice.

### Development

👉 Our development standard.

Use [chevereto/docker](https://github.com/chevereto/docker) for our development standard provisioning. This is preferred when requiring to debug or test the software.

## Other methods

These methods consists in to provide the application files in a file system compatible with the following requirements:

* [PHP](../stack/php.md)
* [Web Server](../stack/web-server.md) (Apache HTTP Web Server, NGiNX)
* [Database Server](../stack/mysql-server.md) (MySQL, MariaDB)

### Using Release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be installed.

👉 This method is recommended for **cPanel**, **Plesk** and all other **web panel** users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to a non-public path in your server
* Unzip the software using your server built-in `unzip` utility in the target website directory (usually the `public_html` folder)
* Remove the `.zip` file
* Open your target website URL and follow the [Initial Setup](#initial-setup) instructions

### Using Composer package manager

Using Composer the installation carried in CLI context. It requires:

* CLI with `curl`, `unzip`
* [Composer](https://getcomposer.org/)

👉 This method is recommended for VPS and machines with CLI access.

* Create a project folder in your server (usually the `public_html` folder)
* Run the command below

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
&& composer install --ignore-platform-reqs \
&& chown www-data: . -R
```
</code-block>
</code-group>

* Once done, open your target website to proceed with [Initial Setup](#initial-setup).

## Initial Setup

This will create the chevereto database tables and the Chevereto admin user. This is needed for the first time the system gets installed and it can be made using HTTP (web) or CLI.

### HTTP setup

* Go to `/install` and submit the installation form.

### CLI setup

* Run the following command:

```sh
sudo -u www-data php /var/www/html/app/bin/legacy -C install \
    -u dev \
    -e dev@chevereto.loc \
    -x password
```

| Option | Description    |
| ------ | -------------- |
| u      | Admin username |
| e      | Admin email    |
| x      | Admin password |
