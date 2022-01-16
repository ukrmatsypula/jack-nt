<template>
  <div>
    <NewPostForm @onSubmit="onSubmit" />
  </div>
</template>

<script>
import NewPostForm from "@/components/admin/NewPostForm.vue";

export default {
  components: {
    NewPostForm,
  },
  layout: "admin",
  methods: {
    onSubmit(newPost) {
      this.$store
        .dispatch("addPost", newPost)
        .then(() => this.$router.push("/admin"));
    },
  },
};
</script>

<style></style>
