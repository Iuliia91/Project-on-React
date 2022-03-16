import { createReducer } from '@reduxjs/toolkit'
import { ExampleOfMenue } from '../actions/exampleOfMenu'

const InitialState = {
  listOFMenu: null,
}

const exampleOfMenueReducer = createReducer(InitialState, (builder) => {
  builder.addCase(ExampleOfMenue.fulfilled, (state, action) => {
    state.listOFMenu = action.payload
  })
})

export default exampleOfMenueReducer
