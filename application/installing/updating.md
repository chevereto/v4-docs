# 🆙 Updating

This section is for the update process required for **existing** Chevereto V4 instances. It consist on updating the [application files](#update-application-files) then perform the system [database update](#database-update).

::: tip 😊 Update service
We do offer paid update service at [Extra Support](https://chevereto.com/support). Get your Chevereto updated directly from the author.
:::

## Update application files

Depending on how you installed Chevereto you will need to refer to the following instructions:

### Using Docker

* Refer to [UPDATING](https://github.com/chevereto/docker/blob/4.0/docs/UPDATING.md).

### Using release package

Refer to [Installing using release package](installation.md#using-release-package).

## Database Update

The database update is required to migrate the existing database schema. You can carry this process in HTTP or command-line context.

💡 For large installations (over 1M of image rows) it is recommended to follow the [CLI database update](#cli-database-update).

### HTTP database update

* Login as Admin
* Go to `/update`

### CLI database update

Refer to [CLI update](../reference/cli.md#update).
