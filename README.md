# Shopify Headless Site with Nuxt.js Example
This is a work in progress.  Will update as I get time.

## Store configuration

Copy `.env.example` to `.env` and populate with your store details.

```
SHOPIFY_DOMAIN="store.myshopify.com"
SHOPIFY_ACCESS_TOKEN=XXXXXX
```

## We use a couple of projects under the hood.
- Nuxt.js Shopify Module (https://github.com/Gomah/nuxt-shopify)
- Cookie Universal Nuxt (https://www.npmjs.com/package/cookie-universal-nuxt)


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
