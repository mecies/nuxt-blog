import axios from "axios";

export const state = () => ({
  loadedPosts: [],
  token: null
});
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
  addPost(state, post) {
    state.loadedPosts.push(post);
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(
      post => post.id === editedPost.id
    );
    state.loadedPosts[postIndex] = editedPost;
  },
  setToken(state, token) {
    state.token = token;
  }
};
export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios
      .get(process.env.baseUrl + "/posts.json")
      .then(res => {
        const postsArray = [];
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key });
        }
        return vuexContext.commit("setPosts", postsArray);
      })
      .catch(err => context.error(err));
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  },
  addPost(vuexContext, postData) {
    const createdPost = {
      ...postData,
      updatedDate: new Date()
    };
    return axios
      .post(process.env.baseUrl + "/posts.json", createdPost)
      .then(res => {
        vuexContext.commit("addPost", { ...createdPost, id: res.data.name });
      })
      .catch(err => console.log(err));
  },
  editPost(vuexContext, editedPost) {
    return axios
      .put(
        process.env.baseUrl + "/posts/" + editedPost.id + ".json",
        editedPost
      )
      .then(res => {
        vuexContext.commit("editPost", { editedPost });
      })
      .catch(err => console.error(err));
  },
  authenticateUser(vuexContext, authData) {
    let authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    if (!authData.isLogin) {
      authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }
    return axios
      .post(authUrl + process.env.firebaseApiKey, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(response => {
        vuexContext.commit("setToken", response.data.idToken);
      })
      .catch(e => console.log(e));
  }
};
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  }
};
