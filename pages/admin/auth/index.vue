<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSumbit" class="auth-form">
        <AppInput v-model="user.email">Login</AppInput>
        <AppInput v-model="user.password" type="password">Password</AppInput>

        <div class="controls">
          <AppButton>Login</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    onSumbit() {
      this.$store
        .dispatch("authUser", this.user)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.log(error);
          this.user.email = "";
          this.user.password = "";
        });
    },
  },
};
</script>

<style lang="scss">
.auth {
  text-align: center;
}
.auth-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;

  input {
    min-width: 460px;
  }
}
</style>
