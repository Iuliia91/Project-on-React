import { createReducer } from '@reduxjs/toolkit'
import {
  ExampleOfMenue,
  amountCaloriesPerDay,
  userMenu,
} from '../actions/exampleOfMenu'

const InitialState = {
  caloriesAmountPerDay: '',
  listOFMenu: null,
  userMenu,
}

const exampleOfMenueReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(ExampleOfMenue.fulfilled, (state, action) => {
      state.listOFMenu = action.payload
    })
    .addCase(amountCaloriesPerDay, (state, action) => {
      state.caloriesAmountPerDay = action.payload
    })

    .addCase(userMenu, (state, action) => {
      state.listOfProduct = []
      console.log('hi')
    })
})

export default exampleOfMenueReducer
