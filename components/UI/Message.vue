<template>
  <div class="message" :class="messageClass">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    messageClass: {
      type: String,
      default: "success",
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/utils/vars.scss';

.message {
  font-size: 22px;

  &.success {
    color: $success-color;
  }

  &.error {
    color: $danger-color;
  }
}
</style>
