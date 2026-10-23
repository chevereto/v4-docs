# Proxy

Chevereto relies on the visitor IP address for flood protection, IP bans, login and signup throttling, upload attribution and stats. When Chevereto runs behind a reverse proxy, CDN or tunnel, the TCP peer (`REMOTE_ADDR`) is the proxy rather than the visitor, so you need to tell Chevereto which header holds the visitor IP and which proxies are allowed to set it.

## Environment variables

| Variable                                     | Default                 | Description                                                                                        |
| -------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| `CHEVERETO_HEADER_CLIENT_IP`                 | (empty)                 | Header that carries the visitor IP. When empty, `REMOTE_ADDR` is used and all headers are ignored. |
| `CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES` | (empty)                 | Comma-separated IPs, CIDR ranges and keywords for the proxies allowed to set that header.          |
| `CHEVERETO_HEADER_FORWARDED_HOST`            | `HTTP_X_FORWARDED_HOST` | Header that carries the original host. Only used when the router secret matches.                   |
| `CHEVERETO_HEADER_ROUTER_SECRET`             | `HTTP_X_ROUTER_SECRET`  | Header that carries the router secret.                                                             |
| `CHEVERETO_ROUTER_SECRET`                    | (empty)                 | Shared secret that enables the forwarded host header. Empty disables it.                           |
| `CHEVERETO_HTTPS`                            | Detected                | Set to `1` to force HTTPS URLs, `0` to force HTTP.                                                 |

### Header name

`CHEVERETO_HEADER_CLIENT_IP` accepts the header name in any of these forms, which all resolve to the same header:

- `X-Forwarded-For`
- `x_forwarded_for`
- `HTTP_X_FORWARDED_FOR`

Common values are `X-Forwarded-For`, `X-Real-IP`, `CF-Connecting-IP` and `True-Client-IP`.

### Trusted proxies

`CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES` takes a comma-separated list. Each entry can be:

| Entry        | Example                     | Meaning                                      |
| ------------ | --------------------------- | -------------------------------------------- |
| IPv4 address | `203.0.113.7`               | A single proxy.                              |
| IPv6 address | `2001:db8::7`               | A single proxy.                              |
| CIDR range   | `172.16.0.0/12`, `fd00::/8` | Any proxy in the range.                      |
| `private`    | `private`                   | Loopback and private network ranges (below). |
| `cloudflare` | `cloudflare`                | Cloudflare's published edge ranges (below).  |

When the variable is **empty**, Chevereto uses a default based on the header:

| Header             | Default trusted proxies |
| ------------------ | ----------------------- |
| `CF-Connecting-IP` | `cloudflare`            |
| Any other header   | `private`               |

When the variable is **set**, it replaces the default entirely. For example, `CHEVERETO_HEADER_CLIENT_IP=CF-Connecting-IP` with `CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=127.0.0.1` no longer trusts Cloudflare's edge. Add `cloudflare` to the list to keep trusting it.

#### `private` ranges

| Range            | Covers                                             |
| ---------------- | -------------------------------------------------- |
| `127.0.0.0/8`    | IPv4 loopback                                      |
| `::1`            | IPv6 loopback                                      |
| `10.0.0.0/8`     | RFC 1918 (Kubernetes pod networks, many VPCs)      |
| `172.16.0.0/12`  | RFC 1918 (Docker bridge and user-defined networks) |
| `192.168.0.0/16` | RFC 1918 (LANs)                                    |
| `fc00::/7`       | RFC 4193 IPv6 unique local addresses               |

## Setups

### No proxy

Visitors connect to the web server that runs Chevereto.

```env
CHEVERETO_HEADER_CLIENT_IP=
```

Leave the header empty. Chevereto uses `REMOTE_ADDR` and ignores any client IP header, including `CF-Connecting-IP` and `X-Forwarded-For`.

### Reverse proxy on the same host or private network

Nginx, Apache, Caddy, HAProxy, Traefik or nginx-proxy in front of Chevereto, either on the same machine or in the same Docker, Kubernetes or private network.

```env
CHEVERETO_HEADER_CLIENT_IP=X-Forwarded-For
```

The default `private` trust covers loopback, Docker networks, Kubernetes pod networks and LANs. To trust only your proxy, set its address or range:

```env
CHEVERETO_HEADER_CLIENT_IP=X-Forwarded-For
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=172.18.0.0/16
```

Make sure the proxy **appends** the peer address to `X-Forwarded-For`. With Nginx:

```nginx
proxy_set_header Host $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```

Apache `mod_proxy`, Caddy `reverse_proxy`, HAProxy `option forwardfor` and Traefik add `X-Forwarded-For` by default.

#### Using `X-Real-IP`

If your proxy sets a single-value header instead:

```nginx
proxy_set_header X-Real-IP $remote_addr;
```

```env
CHEVERETO_HEADER_CLIENT_IP=X-Real-IP
```

The proxy must overwrite this header on every request, never pass a visitor-supplied value through.

### Cloudflare in front of the origin

Cloudflare proxies visitors straight to the server that runs Chevereto.

```env
CHEVERETO_HEADER_CLIENT_IP=CF-Connecting-IP
```

The default trust for `CF-Connecting-IP` is Cloudflare's edge ranges, so the header is only read when the request comes from Cloudflare. Requests that bypass Cloudflare and hit the origin IP directly get `REMOTE_ADDR`.

Enterprise plans that use `True-Client-IP` work the same way, but you need to set the trust explicitly because the default for other headers is `private`:

```env
CHEVERETO_HEADER_CLIENT_IP=True-Client-IP
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=cloudflare
```

### Cloudflare Tunnel

`cloudflared` runs on the same host or in the same Docker network and connects to Chevereto locally. `REMOTE_ADDR` is the tunnel, not Cloudflare, so you need to trust the tunnel's address:

```env
CHEVERETO_HEADER_CLIENT_IP=CF-Connecting-IP
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=127.0.0.1
```

If `cloudflared` runs in a container, use its network range instead, such as `172.16.0.0/12`.

If the origin is also reachable from Cloudflare's edge (a proxied DNS record as well as the tunnel), add `cloudflare`:

```env
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=cloudflare,127.0.0.1
```

### Cloudflare before a reverse proxy

Cloudflare sends traffic to a reverse proxy such as Traefik, Caddy or Nginx, which forwards it to Chevereto. `REMOTE_ADDR` is the reverse proxy.

There are two ways to set this up. Pick one based on whether the reverse proxy can be reached without going through Cloudflare:

#### Using `CF-Connecting-IP`

This needs no reverse proxy configuration, because proxies pass `CF-Connecting-IP` through unchanged. Only use it when the reverse proxy accepts connections from Cloudflare's ranges alone.

```env
CHEVERETO_HEADER_CLIENT_IP=CF-Connecting-IP
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=172.16.0.0/12
```

Replace `172.16.0.0/12` with your reverse proxy's address or range.

> [!WARNING]
> Chevereto takes `CF-Connecting-IP` as-is from the trusted reverse proxy, and can't tell whether the request went through Cloudflare first. If anyone can connect to the reverse proxy directly, they can send `CF-Connecting-IP` with any IP they want.
>
> Restrict the reverse proxy to Cloudflare's ranges with a firewall or an IP allow list. For multi-tenant Traefik, see [Multi-tenant Traefik](#multi-tenant-traefik).

#### Using `X-Forwarded-For`

This works whether or not the reverse proxy is locked down, because Chevereto checks every hop in the chain.

```env
CHEVERETO_HEADER_CLIENT_IP=X-Forwarded-For
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=cloudflare,172.16.0.0/12
```

Replace `172.16.0.0/12` with your reverse proxy's address or range.

A request arrives with a chain like `X-Forwarded-For: 1.1.1.1, 9.9.9.9, 173.245.48.1`:

- `173.245.48.1` was appended by the reverse proxy. It's a Cloudflare edge address.
- `9.9.9.9` was appended by Cloudflare, so it's the visitor. Chevereto uses it.
- `1.1.1.1` was sent by the visitor and is ignored.

If someone bypasses Cloudflare and connects to the reverse proxy directly, the chain ends with their own address, for example `6.6.6.6, 173.245.48.1, 8.8.8.8`. Chevereto uses `8.8.8.8`, so faking the earlier hops gets them nothing.

This needs two things:

- **The `cloudflare` keyword.** Without it, the walk stops at the Cloudflare edge address and every visitor shows up as a Cloudflare IP.
- **The reverse proxy keeps Cloudflare's `X-Forwarded-For` and appends to it.** Some proxies discard the incoming header from peers they don't trust and start a new one with just the peer address. Chevereto then sees only the Cloudflare edge IP. Configure the proxy to trust Cloudflare's ranges:

### Multiple proxy tiers

For example, a load balancer, then an ingress controller, then Chevereto. List every tier, or use `private` when all of them have private addresses:

```env
CHEVERETO_HEADER_CLIENT_IP=X-Forwarded-For
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=private
```

Each tier must append to `X-Forwarded-For`. Chevereto skips every trusted hop from the right and uses the first untrusted one.

### Proxies with public addresses

Cloud load balancers with public IPs, CDNs other than Cloudflare (Fastly, Bunny, CloudFront, Akamai) and proxies reached over CGNAT or Tailscale are not covered by any default. List their published ranges:

```env
CHEVERETO_HEADER_CLIENT_IP=X-Forwarded-For
CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES=203.0.113.0/24,2001:db8:100::/48,private
```

Keep `private` in the list if a local proxy also sits between the CDN and Chevereto.

### Multi-tenant Traefik

In tenants mode, Chevereto generates Traefik dynamic configuration at `/_/api/4/config/traefik`. These variables shape that configuration:

| Variable                        | Description                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `CHEVERETO_PROXY_ENTRYPOINT`    | Traefik entrypoint for the generated routers.                                                      |
| `CHEVERETO_PROXY_IP_ALLOW_LIST` | Source ranges for Traefik's `ipAllowList` middleware. `cloudflare` expands to Cloudflare's ranges. |
| `CHEVERETO_SERVICE_NAME`        | Service name of the Chevereto container (default `php`).                                           |
| `CHEVERETO_SERVICE_PORT`        | Port of the Chevereto container (default `8080`).                                                  |

`CHEVERETO_PROXY_IP_ALLOW_LIST` controls who Traefik lets in. Traefik loads the generated configuration from Chevereto itself, so the list must include the internal network Traefik uses to reach the Chevereto container, not only the public ranges:

```yaml
command:
  - --providers.http.endpoint=http://php:8080/_/api/4/config/traefik
```

For example, to admit only Cloudflare's edge plus Traefik's internal requests:

```env
CHEVERETO_PROXY_IP_ALLOW_LIST=192.168.65.0/24,172.16.0.0/12,cloudflare
```

Replace `192.168.65.0/24` and `172.16.0.0/12` with the networks of your Docker host and containers. Leaving them out locks Traefik out of its own configuration.

The allow list doesn't affect client IP detection. Set `CHEVERETO_HEADER_CLIENT_IP` and `CHEVERETO_HEADER_CLIENT_IP_TRUSTED_PROXIES` as well, following [Cloudflare before a reverse proxy](#cloudflare-before-a-reverse-proxy) or [Reverse proxy on the same host or private network](#reverse-proxy-on-the-same-host-or-private-network).

## HTTPS detection

Chevereto generates HTTPS URLs when any of these is true:

- `HTTPS` server variable is `on`
- `X-Forwarded-Proto` header is `https`
- `CF-Visitor` header contains `https`

When TLS ends at the proxy, make sure it sends `X-Forwarded-Proto`. If URLs still come out as `http://`, or you want to stop relying on headers, force it:

```env
CHEVERETO_HTTPS=1
```

## Forwarded host

By default Chevereto uses the `Host` header as received. If a proxy rewrites `Host` (for example, routing many hostnames to one internal name), Chevereto can read the original host from a forwarded header instead. This only happens when the proxy also sends a shared secret:

```env
CHEVERETO_ROUTER_SECRET=a-long-random-string
CHEVERETO_HEADER_ROUTER_SECRET=HTTP_X_ROUTER_SECRET
CHEVERETO_HEADER_FORWARDED_HOST=HTTP_X_FORWARDED_HOST
```

The proxy must send `X-Router-Secret: a-long-random-string` and `X-Forwarded-Host: images.example.com`. When `CHEVERETO_ROUTER_SECRET` is empty, the forwarded host header is ignored.

Unlike `CHEVERETO_HEADER_CLIENT_IP`, these two header variables take the server variable form (`HTTP_` prefix, upper case, underscores).

## IP-restricted endpoints

Some internal endpoints are restricted by IP. These checks use `REMOTE_ADDR`, **not** the resolved client IP, so behind a proxy they match the proxy's address.

| Endpoint                          | Allowed from                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------- |
| `/_/api/4/config/traefik`         | `private` ranges                                                              |
| Tenants API (`/_/api/4/tenants*`) | `CHEVERETO_TENANTS_API_IP_ALLOW_LIST` (comma-separated). Empty allows any IP. |
