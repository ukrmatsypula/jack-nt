<template>
  <section class="post-list">
    <div class="container">
      <div class="posts-wrapper">
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :admin="admin"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PostPreview from "@/components/blog/PostPreview.vue";

export default {
  name: "PostsList",
  components: {
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.posts-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
