---
sidebarDepth: 3
---

# Authorization (API V4)

API V4 requires header authorization by passing the `X-API-Key` header with an API key.

```plain
X-API-Key: chv_key_here
```

## API keys

- Users can generate API keys at `/settings/api`.
- Admin user can set the public API key for guest uploads at the [Dashboard panel](https://v4-admin.chevereto.com/settings/guest-api.html#public-api-key).
- System administrators can generate [Tenants HTTP API](./tenants.md) keys using the Tenants CLI tool.
