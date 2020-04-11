import axios from "axios";
import Cookie from "js-cookie";

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
  },
  clearToken(state) {
    state.token = null;
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
      .post(
        process.env.baseUrl +
          "/posts.json" +
          "?auth=" +
          vuexContext.state.token,
        createdPost
      )
      .then(res => {
        vuexContext.commit("addPost", { ...createdPost, id: res.data.name });
      })
      .catch(err => console.log(err));
  },
  editPost(vuexContext, editedPost) {
    return axios
      .put(
        process.env.baseUrl +
          "/posts/" +
          editedPost.id +
          ".json" +
          "?auth=" +
          vuexContext.state.token,
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
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + Number.parseInt(response.data.expiresIn) * 1000
        );
        Cookie.set("jwt", response.data.idToken);
        Cookie.set(
          "expirationDate",
          new Date().getTime() + Number.parseInt(response.data.expiresIn) * 1000
        );
      })
      .catch(e => console.log(e));
  },
  initAuth(vuexContext, request) {
    let token;
    let expirationDate;
    if (request) {
      if (!request.headers.cookie) {
        return;
      }
      const jwtCookie = request.headers.cookie
        .split(";")
        .find(key => key.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = request.headers.cookie
        .split(";")
        .find(key => key.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("no token or invalid token");
      vuexContext.dispatch("logout");
      return;
    }
    vuexContext.commit("setToken", token);
  },
  logout(vuexContext) {
    vuexContext.commit("clearToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }
};
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  },
  isAuthenticated(state) {
    return state.token != null;
  }
};
