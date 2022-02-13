import { createReducer } from '@reduxjs/toolkit'
import { userLoggedIn, userLoggedOut } from '../actions/userAction'

const InitialState = {
  userReducer: { userName: '', userRole: [], isLoggedIn: false },
}

const userReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.userName = action.payload.userName
      state.userRole = action.payload.userRole
      state.isLoggedIn = action.payloadisLoggedIn
    })
    .addCase(userLoggedOut, (state, action) => {
      state.userName = ''
      state.userRole = []
      state.isLoggedIn = false
    })
})

export default userReducer
