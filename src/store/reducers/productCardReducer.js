import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import { recipeCard } from '../actions/recipeCard.js'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  cardList: null,
}

const cardList = createReducer(initialState, (builder) => {
  builder.addCase(recipeCard, (state, action) => {
    state.cardList = action.payload
  })
})
/*const cardList = (store = initialState, action) => {
  switch (action.type) {
    case recipeCard.toString():
      return { ...store, ...action.payload }
    default:
      return { ...store }
  }
}*/

export default cardList
