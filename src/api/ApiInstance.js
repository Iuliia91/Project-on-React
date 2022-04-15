import axios from 'axios'
import { store } from 'store/initStore'

const apiRequest = axios.create({
  baseURL: 'https://food-nutrition-information.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'food-nutrition-information.p.rapidapi.com',
    'x-rapidapi-key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
  },
  timeout: 5000,
})

apiRequest.interceptors.request.use((request) => {
  request.headers.acces = store.getState().userReducer.isLoggedIn

  return request
})

apiRequest.interceptors.response.use(
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
)

export default apiRequest
