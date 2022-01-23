<template>
  <section class="new-comment">
    <div class="container">
      <Message v-if="message" :message="message" />

      <form class="contact__form" @submit.prevent="onSubmit">
        <AppInput v-model="comment.name">Name: </AppInput>

        <AppTextArea class="contact__message" v-model="comment.text"
          >Text:</AppTextArea
        >

        <div class="controls">
          <AppButton>Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",

  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    comment: {
      name: "",
      text: "",
    },
    message: null,
  }),
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addComment", {
          postId: this.postId,
          publish: false,
          ...this.comment,
        })
        .then(() => {
          this.message = "Submited";

          this.comment.name = "";
          this.comment.text = "";
        })
        .catch((error) => console.log(error));
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
