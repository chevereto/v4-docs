# 🚀 Upgrading

This section outlines the upgrade process required to install V4 from **Chevereto V3.20** (previous major release).

::: tip 😊 Upgrade service
We do offer paid upgrade service at [Extra Support](https://chevereto.com/support). Get your Chevereto upgraded directly from the author.
:::

💡 Review [Chevereto V4 vs V3](../../introduction/changelog/welcome-back.md#chevereto-v4-vs-v3) comparison tables for a better understanding of changes in V4.

## Requirements

* Existing installation running Chevereto V3.20
* Backup for the existing previous installation (optional, recommended)

### Test install (optional)

It is recommended to check first that a new Chevereto V4 installation can install and run in the target server. This is for detecting any conflicting requirement.

💡 Don't worry about license-domain restrictions. This is just a test install.

* Create a new website
* [Install](installation.md) Chevereto V4
* Make sure it works without issues

If everything goes well you can delete this test installation and try it for real. If not, then go to [Bug Tracking](https://chv.to/bug-tracking) to share your findings.

## Upgrade to V4

Upgrade to Chevereto V4 is performed by providing the software files on top of the existing Chevereto V3 installation.

* Remove `app/vendor` from your Chevereto V3 installation
* Provide Chevereto V4 files on top of Chevereto V3 installation
* Switch to PHP 8
* Proceed with [database update](updating.md##database-update)

### Application settings

In

* Update `app/settings.php` to `app/env.php`
