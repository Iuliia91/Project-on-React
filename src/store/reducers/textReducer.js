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

export default textReducer
