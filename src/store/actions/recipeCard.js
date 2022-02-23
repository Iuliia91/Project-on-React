import { createAction } from '@reduxjs/toolkit'
import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import axios from 'axios'

export const recipeCard = createAction(CARD_LIST_ACTIONS.list)

export const getProductCalorie = createAction(CARD_LIST_ACTIONS.calorie)

export const getCalorieCount = () => {
  return (dispatch) => {
    dispatch(getProductCalorie)

    const options = {
      method: 'GET',
      url: 'https://food-nutrition-information.p.rapidapi.com/foods/search',
      params: {
        query: `${inputDate.productName}`,
      },
      headers: {
        'x-rapidapi-host': 'food-nutrition-information.p.rapidapi.com',
        'x-rapidapi-key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.foods[0].foodNutrients[3].value)
        /*setCalorValue(response.data.foods[0].foodNutrients[3].value)*/

        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
