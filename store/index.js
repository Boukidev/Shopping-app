export const state = () => ({
  products: [
    {
      id: 1,
      name: "ballon de foot",
      price: 59.99,
      url: require("~/assets/images/profile.jpg"),
      alt: "image product",
    },
    {
      id: 2,
      name: "Robe de soirée",
      price: 179.79,
      url: require("~/assets/images/profile.jpg"),
      alt: "image product",
    },
    {
      id: 3,
      name: "Chaussure de ville",
      price: 81.29,
      url: require("~/assets/images/profile.jpg"),
      alt: "image product",
    },
    {
      id: 4,
      name: "Veste en cuir",
      price: 239.89,
      url: require("~/assets/images/profile.jpg"),
      alt: "image product",
    },
    {
      id: 5,
      name: "Short de plage",
      price: 24.99,
      url: require("~/assets/images/profile.jpg"),
      alt: "image product",
    },
  ],

  cart: [],
});

export const getters = {
  getCartTotal: (state) =>
    state.cart.length === 0
      ? 0
      : state.cart.map((el) => el.price * el.quantity).reduce((a, b) => a + b, 0),
};

export const mutations = {
  setCartItem(state, item) {
    if (state.cart.includes(item) && state.cart.length !== 0) {
      item.quantity++;
    } else {
      item.quantity = 1;
      state.cart.push(item);
    }
  },
  removeCartItem(state, id) {
    state.cart.splice(
      state.cart.findIndex((el) => el.id === id),
      1
    );
  },
};

export const actions = {
  async addToCart({ commit }, cartItem) {
    await commit("setCartItem", cartItem);
    alert(`${cartItem.name} add successfuly !`);
  },
  async deleteInCart({ commit }, id) {
    await commit("removeCartItem", id);
    alert(`Remove successfuly !`);
  },
};
