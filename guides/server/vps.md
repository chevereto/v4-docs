# Install Chevereto on Server

::: tip Installation service available
We offer a [paid installation service](https://chevereto.com/support) for this guide. We will install Chevereto VPS for you, including all the requirements and configurations.
:::

Collection of bash scripts to install Chevereto in any VPS (Virtual Private Server).

## Repository

We have a GitHub repository with all the commands we will need. Check the repository at [chevereto/vps](https://github.com/chevereto/vps) for instructions.

## Stack

* PHP
* Apache HTTP Web server
* MySQL Server
* Composer
* FFmpeg
* Certbot
* ExifTool
* exiftran

## Instructions

* Root login to your VPS
* Run the following script(s)

## Ubuntu

> **Note**: Ubuntu LTS 24.04 is recommended. If you run other system you may need to alter the scripts. Feel free to contribute.

### Prepare

The [prepare.sh](https://github.com/chevereto/vps/blob/4.3/ubuntu/24.04/prepare.sh) script install the system stack on Ubuntu.

Reboot the VPS to make sure to apply any pending kernel updates:

```sh
systemctl reboot
```

Make sure to change `24.04` to match your Ubuntu LTS (available 20.04, 22.04 and 24.04).

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.3/ubuntu/24.04/prepare.sh)
```

This message will be shown on success:

```plain
[OK] Stack ready for Chevereto!
```

## Common

* The scripts at `common/` will work under any unix-like system
* Requires `curl` and `unzip`

### New

The [new.sh](https://github.com/chevereto/vps/blob/4.3/common/new.sh) script downloads Chevereto and configures Apache HTTP Web server, MySQL, CRON and FFmpeg. Its purpose is to prepare for [Chevereto Installation](https://v4-docs.chevereto.com/application/installing/installation.html).

This is intended to brand new installations and it should run after [prepare](#prepare) as it assumes that the system stack is ready.

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.3/common/new.sh)
```

#### Notes

On the server:

* The web root is located at `/var/www/html`
* The MySQL root password is saved at `/root/.mysql_password`
* Logs are at `/var/log/apache2`

IMPORTANT:

* Secure your database by running `mysql_secure_installation`

### Get

The [get.sh](https://github.com/chevereto/vps/blob/4.3/common/get.sh) script download and extracts Chevereto in the **current working folder**.

* `cd` into the website project folder (for example `/var/www/html`)
* Run the following command

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.3/common/get.sh)
```

### Cloudflare remote IP

The [cf-remoteip.sh](https://github.com/chevereto/vps/blob/4.3/common/cf-remoteip.sh) script syncs the known IPs for CloudFlare remote IP. This **must** be used if you are using CloudFlare.

> **Warning**: If you use CloudFlare and not complete this setup your Chevereto installation won't be able to retrieve real visitors IP.

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.3/common/cf-remoteip.sh)
```

* To save the above script in your VPS:

```sh
curl -f -SOJL \
    --output-dir /etc/apache2 \
    https://raw.githubusercontent.com/chevereto/vps/4.3/common/cf-remoteip.sh
```

* To add the above script to CRON (cron.d) to keep these IP ranges auto updated:

```sh
cat >/etc/cron.d/cf-remoteip <<EOM
30 3 * * * /etc/apache2/cf-remoteip.sh >/dev/null 2>&1
EOM
```

## HTTPS setup

Run the following command to get automatic renewable HTTPS thanks to certbot. Mind to change `example.com` with the target domain(s).

```sh
certbot --apache -d example.com
```

If you are using `www.` subdomain you can add it like this:

```sh
certbot --apache -d example.com -d www.example.com
```
