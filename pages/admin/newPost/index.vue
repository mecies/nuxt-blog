<template>
  <div class="admin-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink"
          >Thumbnail link</AppControlInput
        >
        <AppControlInput v-model="editedPost.content" control-type="textarea"
          >Author Name</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton @click="onCancel" btn-style="cancel" type="button"
          >Cancel</AppButton
        >
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI-Components/AppControlInput";
import AppButton from "@/components/UI-Components/AppButton";

export default {
  data() {
    return {
      editedPost: {
        author: "",
        title: "",
        thumbnailLink: "",
        content: "",
      },
    };
  },
  components: {
    AppControlInput,
    AppButton,
  },
  methods: {
    onSave() {
      // save the post
      console.log(this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style></style>
