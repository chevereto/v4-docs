# 🚀 Upgrading

This section outlines the upgrade process required to install V4 from **Chevereto V3.20** (previous major release).

💡 Review [Chevereto V4 vs V3](../../introduction/returning/welcome-back.md#chevereto-v4-vs-v3) comparison tables for a better understanding of changes in V4.

## Requirements

* Existing installation running Chevereto V3.20 `latest-release`
* Backup for the existing previous installation (told you)

## Test install

It is **recommended** to check that a new V4 installation can install and run in the target machine. This is a good way for detecting conflicting server requirements as you don't want to handle server issues in the middle of a migration.

👏 Don't worry about license-domain restrictions as this is just a test install.

* Create a new website
* [Install](installation.md) Chevereto V4

If everything goes well you can delete this test installation, or use it as your new V4 application by:

* Wiring the database by [configuring](https://v4-docs.chevereto.com/application/configuration/configuring.html) the [database variables](https://v4-docs.chevereto.com/application/configuration/environment.html#database-variables)
* Mounting the storage for [images](https://v4-admin.chevereto.com/settings/image-upload.html#image-path) and [assets](../configuration/environment.md#assets-variables)

## Upgrade to V4

Upgrade to V4 is performed by providing the software files on top of the existing Chevereto V3 installation. It is the same process for [updating](updating.md) within revisions.

* Provide the Chevereto V4 application files on top of V3 installation
* Go to `/install`, provide the database connection information
* Follow the on-screen process
