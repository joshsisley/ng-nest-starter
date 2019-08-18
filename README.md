# Angular + Nest Starter Application

An Angular and [**Nest**](https://github.com/nestjs/nest) starter app that uses Angular Universal for SSR.

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

---

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
