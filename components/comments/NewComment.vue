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
  
  data: () => ({
    comment: {
      name: "",
      text: "",
    },
    message: null,
  }),
  methods: {
    onSubmit() {
      this.message = "Submited";

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
