# What Can I Ask ChatGPT? Conversation Toolkit

This repository contains the approved AI Doable marketing landing page for **What Can I Ask ChatGPT? Conversation Toolkit**. It is a static React and Vite site with all required imagery included locally under `client/public/assets/`.

## Requirements

Use **Node.js 20.19.0 or newer**. The project is tested with Node.js 22.13.0 and declares **pnpm 10.4.1** as its package manager.

## Local development

Install dependencies with:

```bash
pnpm install --frozen-lockfile
```

Run the local development server with:

```bash
pnpm dev
```

Run the type check with:

```bash
pnpm check
```

## Production build

Create the production build with:

```bash
pnpm build
```

The deployable static output is created in **`dist/`**. The build also creates `dist/404.html` from the site entry page for static-hosting fallback support.

For GitHub Pages or another static host, publish the **contents** of `dist/` so that `index.html` is at the publish root. The Vite base is configured as `./`, allowing the same static build to work from a GitHub repository path or a custom subdomain.

## Checkout configuration

All Conversation Toolkit purchase CTAs use one centralized value located at:

```text
client/src/config.ts
```

The value is currently:

```ts
export const CONVERSATION_TOOLKIT_CHECKOUT_URL = "";
```

Replace the empty string with the final Growth Hub 365 checkout URL before launch. When the value remains empty, purchase buttons keep their approved visual and hover treatment but do not navigate anywhere. No placeholder or invented checkout URL is included.

## Deployment notes

The repository contains no API keys, credentials, database dependency, or server-side runtime requirement. The approved visual assets are local files under `client/public/assets/`, and the only external runtime resource is the public Google Fonts stylesheet declared in `client/index.html`.
