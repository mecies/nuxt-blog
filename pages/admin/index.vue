<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/newPost')">Create post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList :isAdmin="true" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI-Components/AppButton";

export default {
  layout: "admin",
  components: {
    PostList,
    AppButton,
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #cccccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
