<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <Comment :comments="comments" />
    <NewComment :post-id="$route.params.id" />
    <h2>post id: {{ this.$route.params.id }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/blog/Post.vue";
import NewComment from "@/components/comments/NewComment.vue";
import Comment from "@/components/comments/Comment.vue";

export default {
  components: {
    Post,
    NewComment,
    Comment,
  },

  async asyncData(context) {
    let [posts, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/post/${context.params.id}.json`
      ),
      axios.get(
        `https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments.json`
      ),
    ]);

    const filteredComments = Object.values(comments.data).filter(
      (comment) => comment.postId === context.params.id && comment.publish
    );

    return {
      post: posts.data,
      comments: filteredComments,
    };
  },
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
