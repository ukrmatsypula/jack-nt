<template>
  <div>
    <CommentTable
      :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
    >
    <tbody name="tbody">
      <tr v-for="(comment, index) in comments" :key="index">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td v-if="comment.status"><span class="status true">Publish</span></td>
        <td v-else><span class="status false">Hiden</span></td>
        <td><span>{{ comment.changeStatus }}</span></td>
        <td><span>{{ comment.delete }}</span></td>
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
    onSubmit(newPost) {
      console.log("Post Editing");
      console.log(newPost);
    },
  },
};
</script>

<style></style>
