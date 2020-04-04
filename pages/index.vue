<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get latest blog news</h1>
    </section>
    <section class="featured-posts">
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
  </div>
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
