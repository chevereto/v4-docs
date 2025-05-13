# Redis

| Version | Redis |
| ------- | ----- |
| 4.3     | 8     |

Chevereto supports Redis for application-level caching and session storage. While optional, using Redis is recommended to improve performance and reduce database load.

## Resources

* [Redis Open Source](https://github.com/redis/redis)
* [Redis Website](https://redis.io)

## What does Redis do?

Redis is an in-memory data structure store used as a database, cache, and message broker. In Chevereto, Redis handles caching of application data and session storage, significantly improving performance by reducing database queries.

Chevereto uses Redis cache for:

* Settings
* Categories
* Listings (guests)
* Pages
* Top Tags
* Variables
* Sessions

## Application cache

See the [Cache variables](../configuration/environment.md#cache-variables) section for environment variables to configure Redis application-level cache in Chevereto.

## Session storage

See the [Session variables](../configuration/environment.md#session-variables) section for environment variables to configure Redis session storage in Chevereto.

## Fine-tuning

Redis stores frequently accessed data for quick retrieval, reducing database load. You can set cache expiration to keep data fresh and minimize stale cache.

Use `CHEVERETO_MAX_CACHE_TTL` to set the maximum time to live (TTL) for cached items. Set to `0` to disable TTL (perpetual cache).
