# Encryption

Chevereto uses [ChaCha20](https://datatracker.ietf.org/doc/html/rfc7539) algorithm to cipher secrets and sensitive data. When enabled, Chevereto will store these values encrypted in the database.

::: tip Requires manual update
Encryption in Chevereto was added in `v4.0.0-beta.10`. If you installed Chevereto prior to this release you will require to [manually enable encryption](#enabling-encryption).
:::

## What is encrypted?

### Settings secrets

The following settings are encrypted in the database:

| Setting                                                                                                                  | Key                                |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| [API V1 key (public)](../../api/1/authorization.md)                                                                      | api_v1_key                         |
| Album password                                                                                                           | album_password                     |
| [Email SMTP server](https://v4-admin.chevereto.com/settings/email.html#smtp-server-and-port)                             | email_smtp_server                  |
| Email SMTP port                                                                                                          | email_smtp_server_port             |
| [Email SMTP username](https://v4-admin.chevereto.com/settings/email.html#smtp-username)                                  | email_smtp_server_username         |
| [Email SMTP password](https://v4-admin.chevereto.com/settings/email.html#smtp-password)                                  | email_smtp_server_password         |
| AhaSend API key                                                                                                          | email_ahasend_api_key              |
| Amazon SES access key                                                                                                    | email_ses_access_key               |
| Amazon SES secret key                                                                                                    | email_ses_secret_key               |
| Azure resource name                                                                                                      | email_azure_resource_name          |
| Azure key                                                                                                                | email_azure_key                    |
| Brevo API key                                                                                                            | email_brevo_api_key                |
| Infobip API key                                                                                                          | email_infobip_api_key              |
| Infobip base URL                                                                                                         | email_infobip_base_url             |
| Mailgun API key                                                                                                          | email_mailgun_api_key              |
| Mailgun domain                                                                                                           | email_mailgun_domain               |
| Mailjet access key                                                                                                       | email_mailjet_access_key           |
| Mailjet secret key                                                                                                       | email_mailjet_secret_key           |
| Mailomat API key                                                                                                         | email_mailomat_api_key             |
| MailPace API token                                                                                                       | email_mailpace_api_token           |
| MailerSend API key                                                                                                       | email_mailersend_api_key           |
| Mailtrap API token                                                                                                       | email_mailtrap_api_token           |
| Mandrill API key                                                                                                         | email_mandrill_api_key             |
| Microsoft Graph client ID                                                                                                | email_microsoftgraph_client_id     |
| Microsoft Graph client secret                                                                                            | email_microsoftgraph_client_secret |
| Microsoft Graph tenant ID                                                                                                | email_microsoftgraph_tenant_id     |
| Postal API key                                                                                                           | email_postal_api_key               |
| Postal base URL                                                                                                          | email_postal_base_url              |
| Postmark API token                                                                                                       | email_postmark_api_token           |
| Resend API key                                                                                                           | email_resend_api_key               |
| Scaleway project ID                                                                                                      | email_scaleway_project_id          |
| Scaleway API key                                                                                                         | email_scaleway_api_key             |
| SendGrid API key                                                                                                         | email_sendgrid_api_key             |
| Sweego API key                                                                                                           | email_sweego_api_key               |
| [reCAPTCHA secret key](https://v4-admin.chevereto.com/settings/external-services.html#recaptcha-secret-key)              | recaptcha_private_key              |
| [Disqus secret key](https://v4-admin.chevereto.com/settings/external-services.html#disqus-secret-key)                    | disqus_secret_key                  |
| [Akismet API key](https://v4-admin.chevereto.com/settings/external-services.html#akismet-api-key)                        | akismet_api_key                    |
| [ModerateContent API Key](https://v4-admin.chevereto.com/settings/external-services.html#moderatecontent-api-key)        | moderatecontent_key                |
| [Project Arachnid API Username](https://v4-admin.chevereto.com/settings/external-services.html#project-arachnid-api-key) | arachnid_api_username              |
| [Project Arachnid API Password](https://v4-admin.chevereto.com/settings/external-services.html#project-arachnid-api-key) | arachnid_api_password              |

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

This key is automatic provided on [setup](../installing/installation.md#setup), stored in the [app/env.php](../configuration/configuring.md#using-appenvphp) file.

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
