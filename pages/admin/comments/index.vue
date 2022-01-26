<template>
  <client-only>
    <div>
      <CommentTable
        :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
      >
        <tbody slot="tbody">
          <tr v-for="comment in comments" :key="comment.id">
            <td>
              <span>{{ comment.name }}</span>
            </td>
            <td>
              <span>{{ comment.text }}</span>
            </td>
            <td>
              <span v-if="comment.publish" class="status true">Publish</span>
              <span v-else class="status false">Hiden</span>
            </td>
            <td>
              <span @click="changeComment(comment)" class="link"
                >Change status</span
              >
            </td>
            <td>
              <span @click="deleteComment(comment.id)" class="link"
                >Delete</span
              >
            </td>
          </tr>
        </tbody>
      </CommentTable>
    </div>
  </client-only>
</template>

<script>
import axios from "axios";
import CommentTable from "@/components/admin/CommentTable.vue";
import { actions } from "~/store";

export default {
  components: {
    CommentTable,
  },
  layout: "admin",
  data: () => ({
    comments: [],
  }),
  methods: {
    loadComments() {
      axios
        .get(
          "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
        )
        .then((response) => {
          let commentsArray = [];
          Object.keys(response.data).forEach((key) =>
            commentsArray.push({ ...response.data[key], id: key })
          );
          this.comments = commentsArray;
        });
    },
    changeComment(comment) {
      comment.publish = !comment.publish;

      axios.put(
        `https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`,
        comment
      );
    },

    deleteComment(id) {
      axios
        .delete(
          `https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`
        )
        .then(() => this.loadComments());
    },
  },
  mounted() {
    this.loadComments();
  },
};
</script>

<style></style>
