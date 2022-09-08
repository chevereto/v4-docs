# 🚀 Upgrading

This section outlines the upgrade process required to install V4 from **Chevereto V3.20** (previous major release).

💡 Review [Chevereto V4 vs V3](../../introduction/returning/welcome-back.md#chevereto-v4-vs-v3) comparison tables for a better understanding of changes in V4.

::: tip Installation service
No time? Afraid of breaking something? No problem! We offer paid installation service at [Extra Support](https://chevereto.com/support). Get your Chevereto upgraded directly from the author.
:::

## Requirements

* Existing installation running Chevereto V3.20 `latest-release`.
* Backup for the existing previous installation (best practice).

### Test install (optional)

It is **recommended** to check that a new V4 installation can install and run in the target machine. This is for detecting any conflicting server requirements.

💡 Don't worry about license-domain restrictions. This is just a test install.

* Create a new website.
* [Install](installation.md) Chevereto V4.
* Make sure it works without issues.

If everything goes well you can delete this test installation and try it for real. If not, then go to [Bug Tracking](https://chv.to/bug-tracking) to share your findings.

## Upgrade to V4

Upgrade to V4 is performed by providing the software files on top of the existing Chevereto V3 installation. It is the same process for [updating](updating.md) within revisions.

* Provide the Chevereto V4 application files on top of V3 installation.
* Switch to PHP 8.
* Proceed with [database update](updating.md##database-update).
