# 🔑 Encryption

Chevereto uses [ChaCha20](https://datatracker.ietf.org/doc/html/rfc7539) algorithm to cipher secrets and sensitive data. When enabled, Chevereto will store these values encrypted in the database.

::: tip Requires manual update
Encryption in Chevereto was added in `v4.0.0-beta.10`. If you installed Chevereto from a system prior to this release you will require to [manually enable encryption](#enabling-encryption) and then [encrypt secrets](#encrypting-secrets).
:::

## What is encrypted?

### Settings secrets

The following setting secrets are encrypted:

| Setting                                                                                                             | Key                        |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [SMTP server and port](https://v4-admin.chevereto.com/settings/email.html#smtp-server-and-port)                     | email_smtp_server          |
| SMTP server and port                                                                                                | email_smtp_server_port     |
| [SMTP username](https://v4-admin.chevereto.com/settings/email.html#smtp-username)                                   | email_smtp_server_username |
| [SMTP password](https://v4-admin.chevereto.com/settings/email.html#smtp-password)                                   | email_smtp_server_password |
| [reCAPTCHA secret key](https://v4-admin.chevereto.com/settings/external-services.html#recaptcha-secret-key)         | recaptcha_private_key      |
| [Disqus secret key](https://v4-admin.chevereto.com/settings/external-services.html#disqus-secret-key)               | disqus_secret_key          |
| [Akismet API key](https://v4-admin.chevereto.com/settings/external-services.html#akismet-api-key)                   | akismet_api_key            |
| [ModerateContent API Key](https://v4-admin.chevereto.com/settings/external-services.html#moderatecontent-api-key)   | moderatecontent_key        |
| [Project Arachnid API Key](https://v4-admin.chevereto.com/settings/external-services.html#project-arachnid-api-key) | arachnid_key               |
| [XR Debug Host](https://v4-admin.chevereto.com/settings/system.html#xr-debug-host)                                  | xr_host                    |
| [XR Debug Port](https://v4-admin.chevereto.com/settings/system.html#xr-debug-port)                                  | xr_port                    |
| XR Debug Key                                                                                                        | xr_key                     |

### Storage credentials

The following storage columns are encrypted:

| Storage      |
| ------------ |
| server       |
| service      |
| account_id   |
| account_name |
| key          |
| secret       |
| bucket       |

### Two-factor codes

`work-in-progress`

## Key

The encryption key is base64 encoded random string of size 32. To generate a key use `openssl`:

```sh
openssl rand -base64 32
```

This key should remain private, shouldn't be used in other installations. It is advised to backup the key in a safe location. When migrating servers don't forget the encryption key.

## Enabling encryption

To enable encryption provide the [CHEVERETO_ENCRYPTION_KEY](../configuration/environment.md#encryption-key) environment variable.

🪶 This key is automatic provided when using [HTTP setup](../installing/installation.md#http-setup), stored in the [env.php](../configuration/env.php.md) file.

### From previous versions

Chevereto installations previous the introduction of encryption will require to manually cipher the existing data. This is a one time process that encrypts the plain text data stored in the database.

To **manually** enable encryption:

* Enable [maintenance](https://v4-admin.chevereto.com/settings/system.html#maintenance) mode.
* [Configure](../configuration/configuring.md) the `CHEVERETO_ENCRYPTION_KEY` variable.
* Run [encrypt-secrets](cli.md#encrypt-secrets) command.
* Disable maintenance mode.

## Changing key

To change the encryption key (requires both old and new key):

* Enable [maintenance](https://v4-admin.chevereto.com/settings/system.html#maintenance) mode.
* [Configure](../configuration/configuring.md) the `CHEVERETO_ENCRYPTION_KEY` variable to the new encryption key.
* Run [encrypt-update](cli.md#encrypt-update) command, you will require to pass the old key.
* Disable maintenance mode.

🤦‍♂️ If you don't have a backup of the old key:

* Go to Settings and enter again all the passwords for the [settings secrets](#settings-secrets).
* Go to [External Storage](https://v4-admin.chevereto.com/settings/external-storage.html) and enter again all the storage credentials for each external storage.
* Truncate `chv_two-factor` table, all users will require to setup two-factor again.
