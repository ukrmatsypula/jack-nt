import axios from "axios";

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: [],
});

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
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
    console.log(comment);
    return state.commentsLoaded.push(comment);
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

  async addComment({ commit }, comment) {
    return await axios
      .post(
        "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/comments.json",
        comment
      )
      .then((response) => {
        commit("addComment", { ...comment, id: response.data.name });
      })
      .catch((error) => console.log(error));
  },
};
