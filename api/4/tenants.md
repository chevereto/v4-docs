---
sidebarDepth: 3
---

# Tenants API

The Tenants API allows you to manage tenants in a multi-tenant Chevereto installation.

## Authorization

The Tenants API **requires** a key which can be generated using the [Tenants CLI tool](../../application/reference/cli.md#create-tenants-api-key).

## Request signing

All requests to the Tenants API **must** include an `X-Signature` header containing an HMAC SHA256 signature of the request body.

```plain
X-Signature: your_hmac_sha256_signature
```

Generate the signature by hashing the raw request body (as a string) with `CHEVERETO_TENANTS_API_SIGNING_SECRET` using HMAC SHA256. The output must be in hexadecimal format.

<code-group>
<code-block title="PHP">
```php
$signature = hash_hmac('sha256', $body, 'your_request_secret');
```
</code-block>

<code-block title="Shell">
```sh
echo -n 'body string' | openssl dgst -sha256 -hmac 'your_request_secret' -r | awk '{print $1}'
```
</code-block>
</code-group>

## `/_/api/4/tenants`

### GET `/_/api/4/tenants`

`200` List all tenants.

```sh
curl -X GET "/_/api/4/tenants" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### POST `/_/api/4/tenants`

`201` Create a new tenant.

- Request body (JSON):

  - `id` (required): Unique identifier for the tenant.
  - `hostname` (required): Hostname associated with the tenant.
  - `is_enabled` (required): Tenant enabled status (boolean).
  - `plan_id` (optional): ID of the tenant plan to assign.
  - `limits` (optional): Resource limits specific to the tenant.
  - `env` (optional): Environment variables specific to the tenant.

```sh
curl -X POST "/_/api/4/tenants" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "id": "tenant123",
        "hostname": "tenant123.example.com",
        "is_enabled": true,
        "plan_id": "basic_plan",
        "limits": {"CHEVERETO_MAX_USERS":"2"},
        "env": {"CUSTOM_VAR": "value"}
      }'

```

## `/_/api/4/tenants/{id}`

### GET `/_/api/4/tenants/{id}`

`200` Retrieve tenant details.

```sh
curl -X GET "/_/api/4/tenants/tenant123" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### PATCH `/_/api/4/tenants/{id}`

`204` Edit tenant information.

- Request body (JSON):

  - `is_enabled` (optional): New enabled status (boolean).
  - `hostname` (optional): New hostname for the tenant.
  - `plan_id` (optional): New tenant plan ID. Use empty string to remove plan.
  - `limits` (optional): New resource limits.
  - `env` (optional): New environment variables.

```sh
curl -X PATCH "/_/api/4/tenants/tenant123" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "hostname": "new-tenant123.example.com",
        "plan_id": "premium_plan",
        "limits": {"CHEVERETO_MAX_USERS":"5"},
        "env": {"CUSTOM_VAR": "new_value"}
      }'
```

### DELETE `/_/api/4/tenants/{id}`

`204` Delete a tenant.

```sh
curl -X DELETE "/_/api/4/tenants/tenant123" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

## `/_/api/4/tenants/{id}/install`

### POST `/_/api/4/tenants/{id}/install`

`201` Install Chevereto for a tenant.
`404` Tenant not found.
`409` Tenant already installed.

```sh
curl -X POST "/_/api/4/tenants/tenant123/install" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "username": "admin",
        "email": "admin@example.com",
        "password": "mypassword"
      }'
```

## `/_/api/4/tenants-plans`

### GET `/_/api/4/tenants-plans`

`200` List all tenant plans.

```sh
curl -X GET "/_/api/4/tenants-plans" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### POST: `/_/api/4/tenants-plans`

`201` Create a new tenant plan.

- Request body (JSON):

  - `id` (required): Unique identifier for the tenant plan.
  - `limits` (optional): Resource limits specific to the tenant plan.
  - `env` (optional): Environment variables specific to the tenant plan.

```sh
curl -X POST "/_/api/4/tenants-plans" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "id": "basic_plan",
        "limits": {"CHEVERETO_MAX_USERS":"2"}
      }'
```

## `/_/api/4/tenants-plans/{id}`

### GET: `/_/api/4/tenants-plans/{id}`

`200` Retrieve tenant plan details.

```sh
curl -X GET "/_/api/4/tenants-plans/basic_plan" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### PATCH: `/_/api/4/tenants-plans/{id}`

`204` Edit tenant plan information.

- Request body (JSON):

  - `limits` (optional): New resource limits.
  - `env` (optional): New environment variables.

```sh
curl -X PATCH "/_/api/4/tenants-plans/basic_plan" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "description": "An updated basic tenant plan",
        "limits": {"CHEVERETO_MAX_USERS":"3"}
      }'
```

### DELETE `/_/api/4/tenants-plans/{id}`

`204` Delete a tenant plan.

```sh
curl -X DELETE "/_/api/4/tenants-plans/basic_plan" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```
