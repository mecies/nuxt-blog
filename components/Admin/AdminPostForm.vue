<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
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
</template>

<script>
import AppControlInput from "@/components/UI-Components/AppControlInput";
import AppButton from "@/components/UI-Components/AppButton";

export default {
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            content: "",
            thumbnailLink: "",
          },
    };
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
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
