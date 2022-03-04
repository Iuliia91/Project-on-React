import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import {
  recipeCard,
  addProductToTable,
  addProduct,
  getCalorieCount,
} from 'store/actions/recipeCard'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  calorie: '',
  listOfProduct: [],
  isEdited: false,
  loading: 'loading',
}

const productCardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(recipeCard, (state, action) => {
      if (!state.productCardReducer) state.productCardReducer = []
      state.productCardReducer.push(action.payload)
    })

    .addCase(addProduct.pending, (state, action) => {
      state.loading = 'pending'
      console.log('pending')
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.loading = 'fulfilled'
      state.listOfProduct.push(action.payload)
    })
    .addCase(addProduct.rejected, (state, action) => {
      if (!state.calorie) state.calorie = []
      state.calorie.push(action.payload)
    })
    .addMatcher(
      (action) => {
        return action.payload && typeof action.payload.setListModifyed
      },
      (state) => {
        state.isEdited = true
      }
    )
})

export default productCardReducer
