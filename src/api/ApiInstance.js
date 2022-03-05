import axios from 'axios'

const apiRequest = axios.create({
  baseURL: 'https://food-nutrition-information.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'food-nutrition-information.p.rapidapi.com',
    'x-rapidapi-key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
  },
  timeout: 5000,
})

export default apiRequest
