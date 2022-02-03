import axios from "axios";

export const state = () => ({
  postsLoaded: [],
  token: null,
});

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
  checkAuthUser(state) {
    return state.token !== null;
  }
};

export const mutations = {
  setPosts(state, posts) {
    return (state.postsLoaded = posts);
  },

  addPost(state, post) {
    return state.postsLoaded.push(post);
  },

  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      (post) => post.id === postEdit.id
    );
    return (state.postsLoaded[postIndex] = postEdit);
  },

  addComment(state, comment) {
    return state.commentsLoaded.push(comment);
  },
  setToken(state, token) {
    return (state.token = token);
  },
};

export const actions = {
  async nuxtServerInit({ commit }, context) {
    return await axios
      .get(
        "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/post.json"
      )
      .then((response) => {
        const postsArray = [];

        for (let key in response.data) {
          postsArray.push({ ...response.data[key], id: key });
        }

        commit("setPosts", postsArray);
      })
      .catch((error) => console.log(error));
  },

  async authUser({ commit }, authData) {
    const key = "AIzaSyCSU3A8urhByc-fqy9Xm04US3lJkOIbEIM";

    return await axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      )
      .then((response) => commit("setToken", response.data.idToken))
      .catch((error) => console.log(error));
  },
  async addPost({ commit }, post) {
    return await axios
      .post(
        "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/post.json",
        post
      )
      .then((response) => {
        commit("addPost", { id: response.data.name, ...post });
      })
      .catch((error) => console.log(error));
  },

  async editPost({ commit }, post) {
    return await axios
      .put(
        `https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/post/${post.id}.json`,
        post
      )
      .then((response) => {
        commit("editPost", post);
      })
      .catch((error) => console.log(error));
  },

  async addComment(comment) {
    return await axios
      .post(
        "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments.json",
        comment
      )
      .catch((error) => console.log(error));
  },
};
