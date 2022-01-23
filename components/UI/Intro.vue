<template>
  <section class="intro">
    <div class="container">
      <h2 :style="{ padding: padding }">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",

  props: {
    title: {
      type: String,
      required: true,
    },
    padding: {
      type: String,
      default: 0,
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin: 30px 0;
  text-align: center;
  color: #fff;
  background-color: #3227d4;

  h1 {
    font-size: 26px;
  }
}
</style>
