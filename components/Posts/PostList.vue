<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      title="Hello there"
      previewText="This is my first post"
      thumbnail="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/04/PLANNING-NEW-EVENTURES.png"
    />
    <PostPreview
      id="2"
      title="Hello there second time"
      previewText="This is my second post - would you belive that?"
      thumbnail="https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/04/PLANNING-NEW-EVENTURES.png"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
