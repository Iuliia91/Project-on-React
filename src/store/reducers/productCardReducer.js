import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import { recipeCard } from '../actions/recipeCard.js'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  cardList: [],
}

const cardList = createReducer(initialState, (builder) => {
  builder.addCase(recipeCard, (state, action) => {
    if (!state.cardList) state.cardList = []
    state.cardList.push(action.payload)
  })
})

export default cardList
