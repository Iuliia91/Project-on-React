import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import apiRequest from 'api/ApiInstance'

export const recipeCard = createAction(CARD_LIST_ACTIONS.list)

export const typeOfDish = createAction(CARD_LIST_ACTIONS.typeOfDish)

export const addProduct = createAsyncThunk(
  CARD_LIST_ACTIONS.add,

  async (productItem) => {
    const options = {
      params: {
        query: `${productItem.productName}`,
      },
    }
    // { productName: 'carrot', Weigth: '200', calorie: '65' }

    const response = await apiRequest.request('/foods/search', options)

    return {
      ...productItem,
      calorie: response.data.foods[0].foodNutrients[3].value,
    }
  }
)

export const caloriesInDish = createAction()
export const deleteItem = createAction('deleteItem')

export const editItem = createAction('editItem')

export const userMenu = createAction('user_menu_create')
export const cleanState = createAction('user_cancel_saving')
