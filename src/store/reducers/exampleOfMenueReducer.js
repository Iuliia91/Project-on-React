import { createReducer } from '@reduxjs/toolkit'
import { ExampleOfMenue, amountCaloriesPerDay } from '../actions/exampleOfMenu'

const InitialState = {
  caloriesAmountPerDay: '',
  listOFMenu: [],
}

const exampleOfMenueReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(ExampleOfMenue.fulfilled, (state, action) => {
      state.listOFMenu = action.payload
    })
    .addCase(amountCaloriesPerDay, (state, action) => {
      state.caloriesAmountPerDay = action.payload
    })
})

export default exampleOfMenueReducer
