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
import Message from "@/components/UI/Message.vue";
import AppButton from "@/components/UI/controls/Button.vue";
import AppInput from "@/components/UI/controls/Input.vue";
import AppTextArea from "@/components/UI/controls/TextArea.vue";

export default {
  name: "Contacts",
  components: {
    AppButton,
    AppInput,
    AppTextArea,
    Message,
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
