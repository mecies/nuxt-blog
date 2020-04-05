<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  data() {
    return {
      loadedPost: {
        author: "mecies",
        title: "mecies super titke",
        content: "super amazing content",
        thumbnailLink:
          "https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/04/PLANNING-NEW-EVENTURES.png",
      },
    };
  },
  components: {
    AdminPostForm,
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
