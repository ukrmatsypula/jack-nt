<template>
  <PostsList :posts="posts" />
</template>

<script>
export default {
  layout: "admin",
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
};
</script>
