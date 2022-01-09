<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form class="contact__form" @submit.prevent="onSubmit">
        <label for="name">Name</label>
        <input type="text" v-model="user.name" id="name" />
        <label for="email">Email</label>
        <input type="email" v-model="user.email" id="email" />
        <label for="text">Text</label>
        <textarea
          class="contact__message"
          v-model="user.text"
          id="text"
        ></textarea>
        <div class="controls">
          <!-- <button class="btn btnPrimary">Submit</button> -->
          <AppButton btnClass="btnWhite">Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/controls/Button.vue";

export default {
  name: "Contacts",
  components: {
    AppButton,
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
