# 🆙 Updating

This section outlines the update process required for existing Chevereto V4 instances. It consist on updating the [application files](#update-application-files) then perform the system [database update](#database-update).

::: tip 😊 Update service
We do offer paid update service at [Extra Support](https://chevereto.com/support). Get your Chevereto updated directly from the author.
:::

## Update application files

Depending on how you installed Chevereto you will need to refer to the following instructions:

### Using Docker

* [chevereto/v4-docker-production](https://github.com/chevereto/v4-docker-production)
* [chevereto/v4-docker](https://github.com/chevereto/v4-docker)

### Using release package

Refer to [Installing using release package](installation.md#using-release-package).

### Using Composer

Refer to [Installing using Composer](installation.md#using-composer).

## Database Update

The database update is required to migrate the existing database schema. You can carry this process in HTTP or CLI context.

💡 For large installations (over 1M of image rows) it is recommended to follow the [CLI database update](#cli-database-update).

### HTTP database update

* Login as Admin
* Go to `/update`

### CLI database update

Refer to [CLI update](../reference/cli.md#update).
