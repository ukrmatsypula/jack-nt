<template>
  <div>
    <NewPostForm @onSubmit="onSubmit" :postEdit="post" />
  </div>
</template>

<script>
import axios from "axios";
import NewPostForm from "@/components/admin/NewPostForm.vue";

export default {
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
          post: { ...response.data, id: context.params.postId },
        };
      })
      .catch((err) => context.error(err));
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      this.$store.dispatch("editPost", post);
    },
  },
};
</script>
