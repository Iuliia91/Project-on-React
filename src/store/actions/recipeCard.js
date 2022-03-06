import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import apiRequest from 'api/ApiInstance'

export const recipeCard = createAction(CARD_LIST_ACTIONS.list)

export const addProduct = createAsyncThunk(
  CARD_LIST_ACTIONS.add,

  async (productItem) => {
    const options = {
      params: {
        query: `${productItem.productName}`,
      },
    }
    /* const response = await apiRequest.request('/foods/search', options)
    {
      ...productItem,
      calorie: response.data.foods[0].foodNutrients[3].value,
    }*/
    return { productName: 'carrot', Weigth: '200', calorie: '65' }
  }
)

export const deleteItem = createAction('deleteItem')

export const editItem = createAction('editItem')
