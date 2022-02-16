import { globalApiAction } from '../actions/globalApiStateAction'
import { createReducer } from '@reduxjs/toolkit'

const InitialState = {
  appiError: '',
}

const globalApiStateReducer = createReducer(InitialState, (builder) => {
  builder.addCase(globalApiAction, (state, action) => {
    state.appiError = action.payload
  })
})

export default globalApiStateReducer
