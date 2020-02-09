<template>
  <div>
    <h1>{{ article.title }}</h1>
    <div class="content" v-html="article.content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',

  async asyncData({ $shopify, params, error }) {
    // Can't see a way to access a articleByHandle directly from the
    // QueryRoot. So we go through the Blog resource instead
    // https://help.shopify.com/en/api/storefront-api/reference/queryroot
    // https://help.shopify.com/en/api/storefront-api/reference/object/blog?api[version]=2019-10#articlebyhandle-2019-10
    const query = await $shopify.graphQLClient.query((root) => {
      root.addConnection('blogs', { args: { first: 1 }}, (blogs) => {
        blogs.add("id");
        blogs.add("articleByHandle", { args: { handle: params.handle }}, (article) => {
          article.add('id');
          article.add('title');
          article.add('handle');
          article.add('tags');
          article.add('excerpt');
          article.add('content');
          article.add('image', {}, (image) => {
            image.add('id');
            image.add('altText');
            image.add('originalSrc');
            image.add('transformedSrc');
          })
        });
      });
    });

    let article = await $shopify.graphQLClient.send(query).then(({ data }) => {
      let { node } = data.blogs.edges.shift();

      if (!node.articleByHandle) {
        error({ statusCode: 404, message: 'Article not found' })
      }

      let { articleByHandle } = node;
      return articleByHandle;
    });

    return {
      article,
    }
  },
}
</script>
