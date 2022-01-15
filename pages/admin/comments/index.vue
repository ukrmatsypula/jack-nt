<template>
  <div>
    <CommentTable
      :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
    >
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.status" class="status true">Publish</span>
          <span v-else class="status false">Hiden</span>
          </td>
        <td><span @click="changeComment(comment.id)" class="link">Change status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
    </tbody>
    </CommentTable>
  </div>
</template>

<script>
import CommentTable from "@/components/admin/CommentTable.vue";

export default {
  components: {
    CommentTable,
  },
  layout: "admin",
  data: () => ({
    comments: [
      {
        id: 1,
        name: "Roman",
        text: "Test Roman comment lorem ipsum dolor emet sit elit comment!!!",
        status: true,
      },
      {
        id: 2,
        name: "Alex",
        text: "Test Alex comment lorem ipsum dolor emet sit elit comment!!!",
        status: false,
      },
    ],
  }),
  methods: {
    changeComment(id) {
      console.log(`Change comment id - ${id}`);
    },

    deleteComment(id) {
      console.log(`delete comment id - ${id}`);
    },
  },
};
</script>

<style></style>
