export const state = () => ({
  loadedPosts: [],
});
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
};
export const actions = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        vuexContext.commit("setPosts", [
          {
            id: "1",
            title: "Siema ja post",
            previewText: "siema ja preview",
            thumbnail:
              "https://staticeurobiz.europeanchamber.com.cn/wp-content/uploads/2019/04/PLANNING-NEW-EVENTURES.png",
          },
        ]);
        resolve();
      }, 1000);
    });
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  },
};
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  },
};
