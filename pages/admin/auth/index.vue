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
  layout: 'admin',
  data: () => ({
    user: {
      email: '',
      password: '',
    }
  }),
  methods: {
    onSumbit() {
      console.log('submit');
    }
  }
}
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
    height: 40vh;

  input {
    min-width: 460px;
  }
  }
</style>