import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import recipeCard from 'store/actions/recipeCard'
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
