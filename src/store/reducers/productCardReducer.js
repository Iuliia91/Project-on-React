import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import recipeCard from 'store/actions/recipeCard'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  productCardReducer: null,
}

const productCardReducer = createReducer(initialState, (builder) => {
  builder.addCase(recipeCard, (state, action) => {
    if (!state.productCardReducer) state.productCardReducer = []
    state.productCardReducer.push(action.payload)
  })
})

export default productCardReducer
