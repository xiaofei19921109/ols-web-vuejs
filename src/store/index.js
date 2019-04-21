export default {
  state: {
    user: {
      userName: '',
      token: ''
    }
  },
  mutations: {
    login(state, data) {
      state.token = data.token;

    }
  }
}
