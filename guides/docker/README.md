# Chevereto Factory

Roll your own multi-website Chevereto infrastructure with Chevereto Factory, a Docker-based system that allows you to deploy and maintain multiple Chevereto websites on demand.

::: tip
This is the **best way** to deploy Chevereto. Docker refers to container technology and is the way in which we ship the server infra needed to run Chevereto.
:::

By the end of this tutorial, you'll have your own Chevereto Factory up and running, capable of deploying and maintaining multiple Chevereto websites on demand, all with automatic sub-domain creation and renewable HTTPS certificates.

## Advantages

There are several advantages of our Docker system:

* Run multiple websites with ease
* Portability
* Easy to update
* Automatic HTTPS setup
* CloudFlare integration

## Repository

Check the project repository at [chevereto/docker](https://github.com/chevereto/docker) for all instructions and source code.

## Requirements

To follow this guide, make sure you have:

* A Ubuntu server with shell access and public IP address.
* A domain managed by CloudFlare (if using integration)
* A Chevereto license (required for the paid edition)
  * [Purchase](https://chevereto.com/pricing) new license
  * [Access](https://chevereto.com/panel/license) existing purchase

## Getting a server

You'll need a server where you can install Chevereto Factory For this guide we recommend an Ubuntu server, but any Unix-like system will do.

## Accessing server shell

To interact with your server use a terminal emulator. Here are some terminal emulator software by operating system:

| System  | Software                     |
| ------- | ---------------------------- |
| macOS   | Terminal, iTerm 2            |
| Windows | Windows Terminal, Putty      |
| Linux   | Gnome Terminal, Tilix, XTerm |

Access your server via [SSH](https://en.wikipedia.org/wiki/Secure_Shell) using the following command from your computer:

```sh
ssh root@<server ip>
```

Make sure to check your server provider's documentation for specific instructions on accessing the shell.

## Installing chevereto/docker

Start by installing Chevereto Docker repository and its dependencies by running the following command.

```sh
bash <(curl -s https://chevereto.com/sh/ubuntu/22.04/docker.sh)
```

## Setting up CloudFlare integration

Skip this section if you don't need CloudFlare integration to manage domain DNS.

Integrate Chevereto Factory with CloudFlare to automate sub-domain creation for your websites. If you aren't using CloudFlare go to [cloudflare.com](https://cloudflare.com) to get started, it is free. Add your domain to continue with this guide.

To setup CloudFlare with Chevereto Factory:

* Navigate to the DNS configuration for your domain on CloudFlare.
* Create a new A record, take note as it will be your `CLOUDFLARE_A_NAME` environment value. Use the following properties:
  * Type: A
  * Name: chevereto-factory
  * Content: {server ip}
  * Proxy status: DNS only
  * TTL: Auto
* Navigate to SSL/TLS configuration and under **Overview** set mode to **Full (strict)**.

Next create an API token, take note as it will be your `CLOUDFLARE_TOKEN` environment value.

* Go to [api-tokens](https://dash.cloudflare.com/profile/api-tokens) and click on **Create Token**
* Use template **Edit zone DNS**
* Permissions: **Zone DNS Edit**
* Resources: **Include Specific zone DOMAIN**

You will require to take note on `CLOUDFLARE_ZONE_ID` and `CLOUDFLARE_ACCOUNT_ID` which you can get from the **domain overview**.

## Create configuration (.env file)

To create the configuration file run the following command and follow the on-screen instructions.

```sh
make env
```

* `CHEVERETO_KEY`: Your Chevereto license key (required for the paid edition, leave empty for free edition).
* `DOMAIN`: The domain you'll use for spawning Chevereto installations.
* `EMAIL_HTTPS`: The email to receive HTTPS certificate notifications from Let’s Encrypt.
* `CLOUDFLARE_*` options: Integration details for CloudFlare.

## Setting up system

By setting up the system you will enable background processing and ingress HTTP proxy.

To set up the system run the following command:

```sh
make setup
```

## Building the Chevereto image

If you're using free edition you can skip this step, as the image is freely available on [GitHub Container Registry](https://github.com/chevereto/chevereto/pkgs/container/chevereto).

Build the Chevereto container image for the latest release by running the following command.

```sh
make image
```

## Deploying

To deploy a new website use the following command format:

```sh
make deploy NAMESPACE={namespace} ADMIN_EMAIL={email}
```

Replace {namespace} with the desired sub-domain and {email} with the admin email for the website.

For example:

```sh
make deploy NAMESPACE=demo ADMIN_EMAIL=email@mywebsite.com
```

The Chevereto website will be available within seconds as the new sub-domain propagates.

## Updating your websites

To update re-build the Chevereto container image and run the update command.

```sh
make image
make update
```
