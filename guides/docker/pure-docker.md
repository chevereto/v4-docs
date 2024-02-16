# Pure Docker

If you want full control of the container provisioning you can get our base image at:

```sh
ghcr.io/chevereto/chevereto:latest
```

You can get this container running with the following command:

```sh
docker run -d \
  --name chevereto \
  -p 80:80 \
  -e CHEVERETO_DB_HOST=database \
  -e CHEVERETO_DB_USER=chevereto \
  -e CHEVERETO_DB_PASS=user_database_password \
  -e CHEVERETO_DB_PORT=3306 \
  -e CHEVERETO_DB_NAME=chevereto \
  -e CHEVERETO_ASSET_STORAGE_TYPE=local \
  -e CHEVERETO_ASSET_STORAGE_URL=/images/_assets/ \
  -e CHEVERETO_ASSET_STORAGE_BUCKET=/var/www/html/images/_assets/ \
  -v /var/www/html/images/ \
  ghcr.io/chevereto/chevereto:latest
```

See [PURE-DOCKER](https://github.com/chevereto/docker/blob/4.0/docs/PURE-DOCKER.md) for a complete pure Docker command reference.

When using the paid edition you need to build the image locally.

```sh
make image
```
