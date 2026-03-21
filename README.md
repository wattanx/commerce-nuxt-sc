# Demo Store

A simple e-commerce demo app built with Nuxt 4 and Nuxt UI.

## Features

- Product listing and detail pages
- GitHub OAuth login
- Recommended products (visible only when logged in)

## Setup

Install dependencies:

```bash
pnpm install
```

Copy `.env.example` to `.env` and set your GitHub OAuth credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `NUXT_SESSION_PASSWORD` | Session encryption key (32+ characters) |
| `NUXT_OAUTH_GITHUB_CLIENT_ID` | GitHub OAuth App Client ID |
| `NUXT_OAUTH_GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret |

> GitHub App の callback URL には `http://localhost:3000/auth/github` を設定してください。

## Development

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```
