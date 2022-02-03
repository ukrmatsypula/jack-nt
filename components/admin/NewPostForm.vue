<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.description">Description:</AppInput>
        <AppInput v-model="post.img">Img Link:</AppInput>
        <AppTextArea v-model="post.content">Content</AppTextArea>

        <div class="controls">
          <div @click="onCancel" class="btn btnDanger">Cancel</div>
          <AppButton>Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewPostForm",
  props: {
    postEdit: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    postData: {
      title: "",
      description: "",
      img: "",
      content: "",
    },
  }),
  computed: {
    post() {
      return {
        title: this.postEdit.title || "",
        description: this.postEdit.description || "",
        img: this.postEdit.img || "",
        content: this.postEdit.content || "",
        id: this.postEdit.id || ""
      };
    },
  },
  methods: {
    onCancel() {
      this.$router.push("/admin/");
    },
    onSubmit() {
      this.$emit("onSubmit", this.post);
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>
