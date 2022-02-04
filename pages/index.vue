<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="My lasts posts" />
    <PostsList :posts="postsLoaded" />
    <Contacts />
  </div>
</template>

<script>
import Promo from "@/components/Promo.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  name: "IndexPage",
  components: {
    Promo,
    Contacts,
  },
  data: () => ({
    posts: [
      {
        id: 1,
        title: "1 post",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://cdn.shopify.com/s/files/1/0526/8740/5250/products/dalmatian-wearing-thundershirt.jpg?v=1635206832",
      },
      {
        id: 2,
        title: "2 post",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg",
      },
      {
        id: 3,
        title: "3 post",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://cdn.shopify.com/s/files/1/0526/8740/5250/products/thundercap-calming-cap-action3.jpg?v=1640720343",
      },
    ],
  }),
  head() {
    let title = "My ssr blog";
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
