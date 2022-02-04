<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts" />
    <PostsList :posts="postsLoaded" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  head() {
    let title = "My blog page";
    let descritpion = "My ssr blog with nuxt.js";
    let type = 'site'

    return {
      title,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og: description",
          name: "og: description",
          content: "My ssr blog with nuxt.js",
        },
        {
          hid: "description",
          name: "description",
          content: descritpion,
        },
         {
          hid: "og:type",
          name: "og:type",
          content: type,
        },
      ],
    };
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>
