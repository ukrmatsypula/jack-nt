<template>
  <div class="post">
    <input type="text" v-model="postId" />
    <button @click="loadPost">Get post</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    postId: "",
  }),
  methods: {
    loadPost() {
      this.$router.push(`/posts/${this.postId}`);
    },
  },
};
</script>

<style></style>
