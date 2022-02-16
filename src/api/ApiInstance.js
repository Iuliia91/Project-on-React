import axios from 'axios'

const ApiRequest = axios.create({
  baseURL:
    'https://api.spoonacular.com/food/ingredients/9266/information?amount=1',
  timeout: 1000,
})

export default ApiRequest
