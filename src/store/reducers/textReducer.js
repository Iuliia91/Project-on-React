import { textAction } from '../actions/cardList'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  textReducer: 'Privet iz Redux, ',
}

export const textReducer = createReducer(initialState, (builder) => {
  builder.addCase(textAction, (state, action) => {
    state.textReducer += action.payload
  })
})
/*const textReducer = (store = initialState, action) => {
  switch (action.type) {
    case CARD_LIST_ACTIONS.add:
      return { ...store, textReducer: action.payload }
    default:
      return { ...store }
  }
}*/

export default textReducer
