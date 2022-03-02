import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const recipeCard = createAction(CARD_LIST_ACTIONS.list)

export const getCalorieCount = createAsyncThunk(
  'getCalorus',

  async (productItem) => {
    const options = {
      method: 'GET',
      url: 'https://food-nutrition-information.p.rapidapi.com/foods/search',
      params: {
        query: `${productItem}`,
      },
      headers: {
        'x-rapidapi-host': 'food-nutrition-information.p.rapidapi.com',
        'x-rapidapi-key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
      },
    }
    const response = await axios.request(options)

    return { calori: response.data.foods[0].foodNutrients[3].value }
  }
)
