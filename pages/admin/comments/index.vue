<template>
  <no-ssr>
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
              <span v-if="comment.status" class="status true">Publish</span>
              <span v-else class="status false">Hiden</span>
            </td>
            <td>
              <span @click="changeComment(comment.id)" class="link"
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
  </no-ssr>
</template>

<script>
import axios from "axios";
import CommentTable from "@/components/admin/CommentTable.vue";

export default {
  components: {
    CommentTable,
  },
  layout: "admin",
  data: () => ({
    comments: [],
  }),
  methods: {
    changeComment(id) {
      console.log(`Change comment id - ${id}`);
    },

    deleteComment(id) {
      console.log(`delete comment id - ${id}`);
    },
  },
  created() {
    axios
      .get(
        "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
      )
      .then((response) => {
        let commentsArray = [];
        Object.keys(response.data).forEach((key) =>
          commentsArray.push({...response.data[key], id: key })
        );
        console.log(commentsArray);
      });
  },
};
</script>

<style></style>
