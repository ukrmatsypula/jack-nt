<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="My lasts posts"/>
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue';
import Intro from '@/components/UI/Intro.vue';

export default {
  name: "IndexPage",
  components: {
    Promo,
    Intro,
  }
};
</script>
