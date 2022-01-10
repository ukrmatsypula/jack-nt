<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form class="contact__form" @submit.prevent="onSubmit">
        <AppInput v-model="user.name">Name:</AppInput>
        <AppInput type="email" v-model="user.email">Email:</AppInput>

        <AppTextArea class="contact__message" v-model="user.text"
          >Text:</AppTextArea
        >

        <div class="controls">
          <AppButton btnClass="btnWhite">Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/controls/Button.vue";
import AppInput from "@/components/UI/controls/Input.vue";
import AppTextArea from "@/components/UI/controls/TextArea.vue";

export default {
  name: "Contacts",
  components: {
    AppButton,
    AppInput,
    AppTextArea,
  },
  data: () => ({
    user: {
      name: "",
      email: "",
      text: "",
    },
  }),
  methods: {
    onSubmit() {
      return console.log({
        name: this.user.name,
        email: this.user.email,
        text: this.user.text,
      });
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background: #4f68f4;
  color: #fff;

  .title {
    color: #fff;
  }

  &__form {
    max-width: 600px;
    margin: 0 auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>
