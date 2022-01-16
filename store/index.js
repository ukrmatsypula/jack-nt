import axios from "axios";

export const state = () => ({
  postsLoaded: [],
});

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
};

export const mutations = {
  setPosts(state, posts) {
    return state.postsLoaded = posts;
  },
  addPost(state, post) {
    return state.postsLoaded.push(post);
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
          console.log(key);
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
      .then((response) =>
        commit("addPost", { id: response.data.name, ...post })
      )
      .catch((error) => console.log(error));
  },
};
