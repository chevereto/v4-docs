# 🆙 Updating

**Note:** This process is for instances already running Chevereto V4.

To update Chevereto provide the updated software files and then proceed with database update.

## Update software files

To update the software files depends on how you installed Chevereto:

### Docker

When using Docker it will required to re-create the Chevereto image and then re-up the container. Refer to [UPDATING](https://github.com/chevereto/docker/blob/4.0/docs/UPDATING.md) for instructions.

### Release package

When using the release package it will required to override the previous version of the software files. Refer to [Installing](installation.md#using-release-package) (using release package) for instructions.

## Database Update

Once the software files gets updated it will required to update the Chevereto database schema. This process can be carried on HTTP or command-line context.

### HTTP database update

To update Chevereto database via web:

* Login as Admin
* Go to `/update`

### CLI database update

To update Chevereto database from the command line:

* SSH and `cd` to your Chevereto instance
* Run [CLI update](../reference/cli.md#update) `app/bin/legacy -C update`
