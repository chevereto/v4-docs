# Chevereto VPS

VPS stands for Virtual Private Server which for our purpose is described as the type of server where you get root access to install Linux on it.

This deploy alternative provides superb customization. But it comes at a cost as it requires complete system administration.

For experienced legacy users this is a good alternative to run Chevereto.

## Repository

We have a GitHub repository with all the commands we will need. Check the repository at [chevereto/vps](https://github.com/chevereto/vps) for instructions.

## Requirements

For this guide you will require a server. the following:

* VPS machine ([Linode](https://chv.to/linode), [Vultr](https://chv.to/vultr), etc.) with Ubuntu 22.04
* Terminal software (iTerm, Windows Shell)
* Chevereto license (for paid edition)

## Root login

Root login into the VPS. You may also use a non-root user long as it has permissions to modify `www-data` group.

## Prepare machine

To prepare the machine means to install all system requirements. This will take care to install PHP, Apache HTTP Web server, MySQL Server, Composer and Certbot.

Reboot the VPS to make sure to apply any pending kernel updates:

```sh
systemctl reboot
```

Once done run [prepare.sh](https://github.com/chevereto/vps#prepare):

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/ubuntu/22.04/prepare.sh)
```

## New

The [new.sh](https://github.com/chevereto/vps#new) script downloads Chevereto and configures Apache HTTP Web server, MySQL, cron. It prepares Chevereto for [HTTP setup](../../application/installing/installation.md#http-setup).

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/common/new.sh)
```

## Get

The [get.sh](https://github.com/chevereto/vps#get) script download and extracts Chevereto in the current working folder.

This works in any Unix-based system.

```sh
bash <(curl -s https://raw.githubusercontent.com/chevereto/vps/4.0/common/get.sh)
```

## Cloudflare remote IP

When using CloudFlare must follow the [CloudFlare Real IP](https://github.com/chevereto/vps#cloudflare-remote-ip) instructions to detect the real connecting IP.

## Certbot HTTPS setup

Run the following command to get https with Certbot. Mind to change `example.com` with the target domain(s).

```sh
certbot --apache -d example.com -d www.example.com
```
