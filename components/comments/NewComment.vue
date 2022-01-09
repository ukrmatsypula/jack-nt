<template>
  <section class="new-comment">
    <div class="container">
      <form class="contact__form" @submit.prevent="onSubmit">
        <label for="name">Name</label>
        <input type="text" v-model="comment.name" id="name" />

        <label for="text">Text</label>
        <textarea
          class="contact__message"
          v-model="comment.text"
          id="text"
        ></textarea>
        <div class="controls">
          <button class="btn btnPrimary">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
  data: () => ({
    comment: {
      name: "",
      text: "",
    },
  }),
  methods: {
    onSubmit() {
      return console.log({
        name: this.comment.name,
        text: this.comment.text,
      });
    },
  },
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;

  &__form {
    max-width: 600px;
    margin: 0 auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>
