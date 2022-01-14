<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.description">Description:</AppInput>
        <AppInput v-model="post.img">Img Link:</AppInput>
        <AppTextArea v-model="post.content">Content</AppTextArea>

        <div class="controls">
          <AppButton @click="onCancel" class="btnDanger">Cancel</AppButton>
          <AppButton @click="onSubmit">Save</AppButton>
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
      required: false,
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
