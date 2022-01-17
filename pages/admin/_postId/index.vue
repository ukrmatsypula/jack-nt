<template>
  <div>
    <NewPostForm @onSubmit="onSubmit" :postEdit="post" />
  </div>
</template>

<script>
import axios from "axios";
import NewPostForm from "@/components/admin/NewPostForm.vue";

export default {
  layout: "admin",

  components: {
    NewPostForm,
  },
  async asyncData(context) {
    return await axios
      .get(
        `https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/post/${context.params.postId}.json`
      )
      .then((response) => {
        return {
          post: {
            ...response.data,
            id: context.params.postId,
          },
        };
      })
      .catch((err) => context.error(err));
  },
  methods: {
    onSubmit(post) {
      this.$store
        .dispatch("editPost", post)
        .then(() => this.$router.push("/admin"));
    },
  },
};
</script>
