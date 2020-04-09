<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail link</AppControlInput
    >
    <AppControlInput v-model="editedPost.content" control-type="textarea"
      >Content</AppControlInput
    >
    <AppControlInput v-model="editedPost.previewText" control-type="textarea"
      >Preview text</AppControlInput
    >
    <AppButton type="submit">Save</AppButton>
    <AppButton @click="onCancel" btn-style="cancel" type="button"
      >Cancel</AppButton
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            content: "",
            thumbnail: "",
            previewText: ""
          }
    };
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },

  methods: {
    onSave() {
      // save the post
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>
