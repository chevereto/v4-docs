# Redis

| Version | Redis |
| ------- | ----- |
| 4.3     | 7     |

Chevereto fully supports Redis for application-level caching and session storage. This is an recommended yet optional component that can be used to dramatically improve performance and reduce database load.

## Resources

* [Redis Website](https://redis.io)

## What it does?

Redis is an in-memory data structure store that can be used as a database, cache, and message broker. In Chevereto, Redis is used for caching application data and session storage, which can significantly improve performance by reducing the number of database queries.

Chevereto uses Redis cache for the following systems:

* Settings
* Categories
* Listings (guests)
* Pages
* Top Tags
* Variables
* Sessions

## Application cache

Check the [Cache variables](../configuration/environment.md#cache-variables) section for the environment variables that you can set to configure Redis application-level cache in Chevereto.

## Session storage

Check the [Session variables](../configuration/environment.md#session-variables) section for the environment variables that you can set to configure Redis session storage in Chevereto.

## Fine tuning

Redis in Chevereto is used to store data that is frequently accessed and can be quickly retrieved, reducing the load on the database. This means that you can set the cache to expire after a certain period of time, which can help to keep the data fresh and reduce the amount of stale data in the cache.

Using `CHEVERETO_MAX_CACHE_TTL` you can set the maximum time to live (TTL) for cached items. Use zero `0` to disable TTL (perpetual cache).
