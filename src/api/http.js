import Axios from 'axios'
import storeBase from './../store/'

const ax = new Axios({
  headers: {'X-Requested-Token': storeBase.state.user.token}
})

export default ax
