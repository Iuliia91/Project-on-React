import { store } from 'store/initStore'
import axios from 'axios'
import { userLoggedOut } from '../store/actions/userAction'
import { globalApiAction } from '../store/actions/globalApiStateAction'

const Server = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
})

/*Server.interceptors.request.use((request) => {
  request.headers.acces = store.getState().userReducer.isLoggedIn
  return request
})

Server.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.code === 401) {
      store.dispatch(userLoggedOut({ logOutReason: 'session time out' }))
    } else {
      store.dispatch(globalApiAction(error))
      throw error
    }
  }
)*/

export default Server
