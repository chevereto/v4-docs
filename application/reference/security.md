# 👮‍♀️ Security

## Security Checklist

Must **constantly double-checking** the following:

* [PHP Filesystem](../stack/php.md#php-filesystem)
* [Real connecting IP](../stack/web-server.md#real-connecting-ip)
* [Restrict access to PHP files](../stack/web-server.md#restrict-direct-access-to-php-files)
* [CRON setup](../stack/cron.md)
* [Email setup](https://v4-admin.chevereto.com/settings/email.html)

## Encryption

Sensitive data such as service credentials is stored [encrypted](encryption.md) in the database.

## Two-factor authentication

Users and specially administrators should always configure a two-factor device for an additional layer of security.

## Encoded IDs

Public IDs are **always encoded** to avoid content enumeration attacks.

While the data is stored in database rows indexed with integer ids, Chevereto handles these on public as encoded identifiers. Similar to how YouTube encode their video IDs. This is made to avoid enumeration of content based on incremental identifiers (retrieve N content by doing `+1` on the identifier).

### Encoding and decoding IDs

Public IDs **are unique** and vary from each different installation.

On installation Chevereto creates a random generated `crypt_salt` which is used by the system to encode/decode these identifiers. This allows to convert the numeric ids stored in the database to alphanumeric ids unique to your installation.

### Making encoded IDs larger

The length of encoded IDs can be customized.

Larger encoded IDs will be always better for preserving the privacy of the uploaded content. Two alternatives to achieve larger encoded IDs:

#### Altering `id_padding` setting

💡 This method will affect previous generated links. Use it only if is safe to edit the IDs.

Go to the database, find the `chv_settings` table and edit the `setting_name` identified as `id_padding`. (zero by default).

Entering an integer value like `5000` will instruct the system to generate IDs using this base padding.

#### Altering `chv_images` table

💡 This method won't affect any previous generated links.

Go to the database, find the `chv_images` table and change the `AUTOINCREMENT` to the ID padding you want to use.

## Cross-site request forgery

Cross-site request forgery ([CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)) is a type of exploit that is used to fool website's origin requests by transmitting instructions from a remote website without the user's consent, for example trigger a delete content request without the user consent or willing.

The CSRF protection is based in the usage of a request token, which is set by session when the website loads and is asked when sub-sequential request are made.

## Hashing

Chevereto uses [BCrypt](https://en.wikipedia.org/wiki/Bcrypt) cryptography to store passwords and cookie hashes.

## reCAPTCHA

Chevereto includes support for [reCAPTCHA](https://v4-admin.chevereto.com/settings/external-services.html#recaptcha) which helps to prevent bots from signing up and try to brute-force a user password.

## Daily Invalid Requests

Too many invalid request forbid access to the system.

An invalid request is when a user enters a bad password or the CSRF token doesn't match. Each time an invalid request is triggered the system stores the IP and the given action that triggers that invalid request.

There is a hard-coded setting in the system that controls the limit of allowed invalid requests per day and when a user reaches this limit the system won't allow requests from that in IP in a period of 24 hours.

## Flood Protection

Control how much content/time can be added by users.

Avoid resource hungry users by configuring [Flood Protection](https://v4-admin.chevereto.com/settings/flood-protection.html). This enables to control how much they can upload based on configurable time settings.
