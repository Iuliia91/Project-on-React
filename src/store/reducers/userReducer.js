import { createReducer } from '@reduxjs/toolkit'
import { userLoggedIn, userLoggedOut } from '../actions/userAction'

const InitialState = {
  userName: '',
  Gender: '',
  userHeigth: '',
  userWeigth: '',
  userGoaldWeigth: '',
  id: '',
  isLoggedIn: false,
}

const userReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.userName = action.payload.userName
      state.Gender = action.payload.Gender
      state.userHeigth = action.payload.userHeigth
      state.userWeigth = action.payload.userWeigth
      state.userGoaldWeigth = action.payload.userGoaldWeigth
      state.id = action.payload.id
      state.isLoggedIn = action.payload.isLoggedIn
    })
    .addCase(userLoggedOut, (state, action) => {
      state.userName = ''
      state.useGenderrRole = ''
      state.userHeigth = ''
      state.userWeigth = ''
      state.userGoaldWeigth = ''
      state.id = ''
      state.isLoggedIn = false
    })
})

export default userReducer
