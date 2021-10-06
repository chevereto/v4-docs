# 📌 Redis

Chevereto V4 rely in Redis for data caching strategies for everything considered persistent.

::: tip Where available
Redis is not a mandatory requirement. Note that your Chevereto V4 performance experience will be negatively affected if you don't use Redis.
:::

## Resources

* [Website](https://redis.io/)

## What it does?

Redis is used to cache anything from application settings, user permissions, listings, etc. Is allows to leverage the load of the [database server](database-server.md), which will decrease CPU and RAM usage on your setup.
