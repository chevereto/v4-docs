---
sidebarDepth: 3
---

# Authorization (API V1)

API V1 supports header authorization by passing the `X-API-Key` header with an API key.

```plain
X-API-Key: chv_key_here
```

API V1 also supports authorization by passing the `key` parameter in the request.

## API keys

- Users can generate API keys at `/settings/api`.
- Admin user can set the public API key for guest uploads at the [Dashboard panel](https://v4-admin.chevereto.com/settings/guest-api.html#public-api-key).
