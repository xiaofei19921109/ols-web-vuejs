import axios from 'axios'
import storeBase from './../store/'

const instance = axios.create({
  baseURL: 'https://localhost:8080/api',
  timeout: 1000,
  headers: {
    'X-Requested-Token': storeBase.state.user.token
  }
});


export default instance;
