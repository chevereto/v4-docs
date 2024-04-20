# Updating

This process is for instances already running **Chevereto V4**. The process consist in update software files and then proceed with database migrations.

## Software filesystem update

To update the software files depends on how you installed Chevereto. Follow the instructions for your installation method.

### Release package

This applies to any **non-Docker** installation.

**Note:** For paid edition and if you haven't entered your license key make to visit `/dashboard/?license` first.

* Go to `/dashboard`
* Click on **Check upgrades** button
* Follow the on-screen upgrade instructions

For CLI driven update run the following command:

```sh
php app/upgrading.php
```

If you need to force upgrade (re-download software files) you can do it by accessing to `/dashboard/?upgrade`.

For manual upgrade refer to [Installing](installation.md#using-release-package) for instructions on how to install the software files.

### Docker

When using Docker it will required to re-build the Chevereto image ([make image](https://github.com/chevereto/docker/blob/4.1/docs/BUILDING.md) or [docker build](https://github.com/chevereto/docker/blob/4.1/docs/PURE-DOCKER.md)) and then re-start the containers.

Refer to [UPDATING](https://github.com/chevereto/docker/blob/4.1/docs/UPDATING.md) for instructions.

## Database update

Once the software files gets updated it will required to update the Chevereto database schema. This process can be carried on HTTP or command-line context.

### HTTP database update

To update Chevereto database via web:

* Login as Admin
* Go to `/update`

### CLI database update

To update Chevereto database from the command line:

* SSH and `cd` to your Chevereto instance
* Run [CLI update](../reference/cli.md#update) `app/bin/legacy -C update`
