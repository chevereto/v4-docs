---
sidebarDepth: 3
---

# Tenants API

The Tenants API allows you to manage tenants in a multi-tenant Chevereto installation.

## Request signing

Requests to the Tenants API **must** be signed by passing the `X-Signature` header containing a base64-encoded signature of the request body.

Signatures are generated using the raw request body string and the [Tenants Private Key](../../application/configuration/multitenancy.md#tenants-key-pair).

```php
$signed = $privateKey->sign($body);
$signature = base64_encode($signed);
```

## `/api/4/_/tenants`

### POST `/api/4/_/tenants`

`201` Create a new tenant.

- Request body (JSON):

  - `tenant_id` (required): Unique identifier for the tenant.
  - `hostname` (required): Hostname associated with the tenant.
  - `is_enabled` (required): Tenant enabled status (1 or 0).
  - `plan_id` (optional): ID of the tenant plan to assign.
  - `limits` (optional): Resource limits specific to the tenant.
  - `env` (optional): Environment variables specific to the tenant.

```sh
curl -X POST "/api/4/_/tenants" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "tenant_id": "tenant123",
        "hostname": "tenant123.example.com",
        "is_enabled": 1,
        "plan_id": "basic_plan",
        "limits": {"CHEVERETO_MAX_USERS":"2"},
        "env": {"CUSTOM_VAR": "value"}
      }'

```

## `/api/4/_/tenants/{tenantId}`

### GET `/api/4/_/tenants/{tenantId}`

`200` Retrieve tenant details.

```sh
curl -X GET "/api/4/_/tenants/tenant123" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### PATCH `/api/4/_/tenants/{tenantId}`

`204` Update tenant information.

- Request body (JSON):

  - `is_enabled` (optional): New enabled status (1 or 0).
  - `hostname` (optional): New hostname for the tenant.
  - `plan_id` (optional): New tenant plan ID.
  - `limits` (optional): New resource limits.
  - `env` (optional): New environment variables.

```sh
curl -X PATCH "/api/4/_/tenants/tenant123" \
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

### DELETE `/api/4/_/tenants/{tenantId}`

`204` Delete a tenant.

```sh
curl -X DELETE "/api/4/_/tenants/tenant123" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

## `/api/4/_/tenants-plans`

### GET `/api/4/_/tenants-plans`

`200` List all tenant plans.

```sh
curl -X GET "/api/4/_/tenants-plans" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### POST: `/api/4/_/tenants-plans`

`201` Create a new tenant plan.

- Request body (JSON):

  - `plan_id` (required): Unique identifier for the tenant plan.
  - `name` (required): Name of the tenant plan.
  - `limits` (optional): Resource limits specific to the tenant plan.
  - `env` (optional): Environment variables specific to the tenant plan.

```sh
curl -X POST "/api/4/_/tenants-plans" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "plan_id": "basic_plan",
        "name": "Basic Plan",
        "limits": {"CHEVERETO_MAX_USERS":"2"}
      }'
```

### GET: `/api/4/_/tenants-plans/{planId}`

`200` Retrieve tenant plan details.

```sh
curl -X GET "/api/4/_/tenants-plans/basic_plan" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```

### PATCH: `/api/4/_/tenants-plans/{planId}`

`204` Update tenant plan information.

- Request body (JSON):

  - `name` (optional): New name for the tenant plan.
  - `limits` (optional): New resource limits.
  - `env` (optional): New environment variables.

```sh
curl -X PATCH "/api/4/_/tenants-plans/basic_plan" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
  -d '{
        "name": "Basic Plan (Updated)",
        "description": "An updated basic tenant plan",
        "limits": {"CHEVERETO_MAX_USERS":"3"}
      }'
```

### DELETE `/api/4/_/tenants-plans/{planId}`

`204` Delete a tenant plan.

```sh
curl -X DELETE "/api/4/_/tenants-plans/basic_plan" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Signature: request_signature" \
```
