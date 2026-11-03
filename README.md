# Demo Store

A simple e-commerce demo app built with Nuxt 4 and Nuxt UI.

## Features

- Product listing and detail pages
- GitHub OAuth login
- Recommended products (visible only when logged in)

## Setup

Use Node.js 24.15.0 (see `.node-version`) and pnpm 10.34.7.

Install dependencies:

```bash
pnpm install
```

Copy `.env.example` to `.env` and set your GitHub OAuth credentials:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `NUXT_APP_SECRET` | Application secret used to derive session encryption keys (32+ characters) |
| `NUXT_OAUTH_GITHUB_CLIENT_ID` | GitHub OAuth App Client ID |
| `NUXT_OAUTH_GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret |

> Set the callback URL of your GitHub OAuth App to `http://localhost:3000/auth/github`.

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```

### Upgrading authentication

With nuxt-auth-utils 0.6, `NUXT_SESSION_PASSWORD` is no longer used. Set
`NUXT_APP_SECRET` in your local `.env` and in each Cloudflare deployment
environment before deploying. Keep the secret consistent across builds and
instances of the same environment. Existing users will need to sign in again
once because session encryption keys are now derived from the application secret.

See the [nuxt-auth-utils 0.6 release](https://github.com/atinux/nuxt-auth-utils/releases/tag/v0.6.0).
