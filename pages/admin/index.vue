<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/newPost')">Create post</AppButton>
      <AppButton @click="OnLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList :posts="loadedPosts" :isAdmin="true" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    OnLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    }
  }
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
