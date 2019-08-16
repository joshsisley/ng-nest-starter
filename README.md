# Angular + Nest Starter Application

An Angular and [**Nest**](https://github.com/nestjs/nest) starter app that uses Angular Universal for SSR.

## Getting Started

For help with Angular Universal, you can follow this guide [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering) or go to this repo [angular/universal](https://github.com/angular/universal).

---

### Build Time Prerendering Vs. Server Side Rendering(ssr)

This repo demonstrates the use of 2 different forms of Server Side Rendering.

**Prerender**

- Happens at build time
- Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Server-Side Rendering(ssr)**

- Happens at runtime
- Uses `ngExpressEngine` to render your application on the fly at the requested url.

---

### Installation

- `npm install`

### Development (Client-side only rendering)

- `npm start`

### Production (also for testing SSR/Pre-rendering locally)

\*`npm run build:ssr && npm run serve:ssr`

- Compiles your application and spins up a Nest server to serve
  your Universal application on `http://localhost:4000`.

\*`npm run build:prerender && npm run serve:prerender`

- Compiles your application and prerenders your
  applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
- **Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser`
  folder, rather than the usual `dist`

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
