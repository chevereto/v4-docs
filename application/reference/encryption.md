# 🔑 Encryption

Chevereto uses [ChaCha20](https://datatracker.ietf.org/doc/html/rfc7539) algorithm to encrypt database fields containing sensitive data. Chevereto encrypts settings secrets, storage credentials and two-factor codes.

## Key

💡 The encryption key is automatic provided (except when using Docker).

To use encryption you will require to set the [CHEVERETO_ENCRYPTION_KEY](../configuration/environment.md#encryption-key) environment variable.

The encryption key is base64 encoded random string of size 32. Generate a key running this command:

```sh
openssl rand -base64 32
```

## Encrypting secrets

The [encrypt-secrets](cli.md#encrypt-secrets) command will encrypt the application secrets to the database.

## Changing key

Update the environment value for `CHEVERETO_ENCRYPTION_KEY` (the new key). Then run the [encrypt-update-key](cli.md#encypt-update) command.
