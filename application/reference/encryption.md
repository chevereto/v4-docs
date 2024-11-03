# Encryption

Chevereto uses [ChaCha20](https://datatracker.ietf.org/doc/html/rfc7539) algorithm to cipher secrets and sensitive data. When enabled, Chevereto will store these values encrypted in the database.

::: tip Requires manual update
Encryption in Chevereto was added in `v4.0.0-beta.10`. If you installed Chevereto prior to this release you will require to [manually enable encryption](#enabling-encryption).
:::

## What is encrypted?

### Settings secrets

The following settings are encrypted in the database:

| Setting                                                                                                                  | Key                        |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| [API V1 key (public)](../../developer/api/api-v1.md#key)                                                                 | api_v1_key                 |
| Album password                                                                                                           | album_password             |
| [SMTP server](https://v4-admin.chevereto.com/settings/email.html#smtp-server-and-port)                                   | email_smtp_server          |
| SMTP port                                                                                                                | email_smtp_server_port     |
| [SMTP username](https://v4-admin.chevereto.com/settings/email.html#smtp-username)                                        | email_smtp_server_username |
| [SMTP password](https://v4-admin.chevereto.com/settings/email.html#smtp-password)                                        | email_smtp_server_password |
| [reCAPTCHA secret key](https://v4-admin.chevereto.com/settings/external-services.html#recaptcha-secret-key)              | recaptcha_private_key      |
| [Disqus secret key](https://v4-admin.chevereto.com/settings/external-services.html#disqus-secret-key)                    | disqus_secret_key          |
| [Akismet API key](https://v4-admin.chevereto.com/settings/external-services.html#akismet-api-key)                        | akismet_api_key            |
| [ModerateContent API Key](https://v4-admin.chevereto.com/settings/external-services.html#moderatecontent-api-key)        | moderatecontent_key        |
| [Project Arachnid API Username](https://v4-admin.chevereto.com/settings/external-services.html#project-arachnid-api-key) | arachnid_api_username      |
| [Project Arachnid API Password](https://v4-admin.chevereto.com/settings/external-services.html#project-arachnid-api-key) | arachnid_api_password      |

### Storage credentials

The following storage columns for `chv_storages` are encrypted in the database:

* server
* service
* account_id
* account_name
* key
* secret
* bucket

### Two-factor secrets

Two-factor secret codes used to generate TOTP are encrypted in the database. Table `chv_two_factors`.

## Key

The encryption key is base64 encoded random string of size 32. To generate a key use `openssl`:

```sh
openssl rand -base64 32
```

### Key security

Handle the encryption key with the same discretion of a password.

* The encryption key should remain **private**.
* Don't re-use the same key in different installations.
* Backup the key in a safe location.

## Enabling encryption

To enable encryption provide the [CHEVERETO_ENCRYPTION_KEY](../configuration/environment.md#encryption-key) environment variable.

This key is automatic provided when using [HTTP setup](../installing/installation.md#setup), stored in the [env.php](../configuration/configuring.md#using-appenvphp) file.

### From previous versions

Chevereto installations previous the introduction of encryption will require to manually cipher the existing data. This is a one time process that encrypts the plain text data stored in the database.

To manually enable encryption:

* Enable [maintenance](https://v4-admin.chevereto.com/settings/system.html#maintenance) mode.
* [Configure](../configuration/configuring.md) the `CHEVERETO_ENCRYPTION_KEY` variable.
* Run [encrypt-secrets](cli.md#encrypt-secrets) command.
* Disable maintenance mode.

## Disabling encryption

When disabling encryption all the cipher texts stored in the database will be reverted to its plain text value.

To disable encryption:

* Enable [maintenance](https://v4-admin.chevereto.com/settings/system.html#maintenance) mode.
* Run [decrypt-secrets](cli.md#decrypt-secrets) command.
* [Configure](../configuration/configuring.md) the `CHEVERETO_ENCRYPTION_KEY` variable to empty string.
* Disable maintenance mode.
