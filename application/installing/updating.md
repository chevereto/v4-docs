# 🆙 Updating

This section outlines the update process required for existing Chevereto V4 instances.

## Using Docker

### Container Builder

👉 Refer to [chevereto/container-builder](https://github.com/chevereto/container-builder) for updating instructions.

### chevereto/docker

👉 Refer to [chevereto/docker](https://github.com/chevereto/docker) for updating instructions.

## Using Release package

The release package is a `zip` file containing the software files. Once extracted, the software is ready to be updated.

👉 This method is recommended for **cPanel**, **Plesk** and all other **web panel** users.

* Upload the [latest release](https://chevereto.com/panel/downloads) package to a non-public path in your server
* Unzip the software using your server built-in `unzip` utility in the target website directory (usually the `public_html` folder)
* Remove the `.zip` file
* Open your target website URL at `/install`

## Using Composer package manager

Using Composer the update carried in CLI context. It requires:

* CLI with `curl`, `unzip`
* [Composer](https://getcomposer.org/)

👉 This method is recommended for VPS and machines with CLI access.

* Go to the project folder in your server (usually the `public_html` folder)
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

* Once done, open your target website at `/install`.
