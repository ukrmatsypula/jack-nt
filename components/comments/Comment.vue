<template>
  <section class="comments">
    <div class="container">
      <h2 class="title">Comments</h2>

      <template v-if="comments.length">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <p class="name">{{ comment.name }}</p>
          <p class="text">{{ comment.text }}</p>
        </div>
      </template>
      <template v-else>
        <Intro title="No comment at this time." padding="0 20px" />
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.comments {
  text-align: center;
  margin: 30px auto;
}
.comment {
  width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;

  .name {
    margin-bottom: 12px;
    font-size: 24px;
    color: #5670e6;
  }
}
</style>
