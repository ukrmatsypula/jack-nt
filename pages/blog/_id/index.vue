<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <Comment :comments="comments" />
    <NewComment />
    <h2>post id: {{ this.$route.params.id }}</h2>
  </div>
</template>

<script>
import Post from "@/components/blog/Post.vue";
import NewComment from "@/components/comments/NewComment.vue";
import Comment from "@/components/comments/Comment.vue";

export default {
  components: {
    Post,
    NewComment,
    Comment,
  },
  data: () => ({
    post: {
      id: 1,
      title: "1 post",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error consequuntur minima quibusdam molestias! Excepturi, mollitia voluptatibus dolores, expedita modi eos ipsa officiis repudiandae accusamus sed explicabo recusandae, minus exercitationem sapiente quas animi cumque labore aliquid nam perspiciatis! Hic quam numquam tempora, earum temporibus et dolor minima magnam amet distinctio, nihil beatae ad odio, itaque nam dolore pariatur nesciunt architecto accusamus? Molestias officiis dolorem necessitatibus fugit eligendi tempore facere quas nesciunt laudantium adipisci dignissimos ad qui, aut rem debitis ipsum molestiae distinctio sequi quos! Est quasi dicta, eligendi tempore nemo perferendis eius magnam perspiciatis cupiditate, suscipit quis excepturi. Autem, reiciendis?",
      img: "https://cdn.shopify.com/s/files/1/0526/8740/5250/products/dalmatian-wearing-thundershirt.jpg?v=1635206832",
    },
    comments: [
      {
        id: 1,
        name: "Roman",
        text: "Test Roman comment lorem ipsum dolor emet sit elit comment!!!",
      },
      {
        id: 2,
        name: "Alex",
        text: "Test Alex comment lorem ipsum dolor emet sit elit comment!!!",
      },
    ],
  }),
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;

  &-header {
    margin-bottom: 30px;
    text-align: center;

    img {
      max-width: 400px;
      margin-bottom: 16px;
    }

    p {
      color: #999;
    }
  }

  .post-body {
    text-align-last: left;
  }
}
</style>
