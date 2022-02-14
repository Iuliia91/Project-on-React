import store from 'store/initStore'
import axios from 'axios'
import { userLoggedOut } from '../store/actions/userAction'

const Server = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
})

/*Server.interceptors.request.use(()=>)*/

export default Server
