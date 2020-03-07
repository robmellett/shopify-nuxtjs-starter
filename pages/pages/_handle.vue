<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div class="content" v-html="page.body">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StandardPage',

  async asyncData({ $shopify, params, error }) {
    const query = await $shopify.graphQLClient.query((root) => {
      root.add('pageByHandle', { args: { handle: params.handle } }, (page) => {
        page.add('title');
        page.add('body');
      });
    });

    let page = await $shopify.graphQLClient.send(query).then(({ data }) => {
      if (!data.pageByHandle) {
        error({ statusCode: 404, message: 'Page not found' })
      }

      return data.pageByHandle;
    });

    return {
      page: page,
    }
  }
}
</script>
