import axios from "axios";

export const state = () => ({
  postsLoaded: [],
});

export const getters = {};

export const mutations = {
  addPost(state, post) {
    console.log(post);
    return state.postsLoaded.push(post);
  },
};

export const actions = {
  async addPost({ commit }, post) {
    return await axios
      .post(
        "https://blog-nuxt-5e003-default-rtdb.europe-west1.firebasedatabase.app/post.json",
        post
      )
      .then((response) => commit("addPost", { id: response.data.name, ...post }))
      .catch((error) => console.log(error));
  },
};
