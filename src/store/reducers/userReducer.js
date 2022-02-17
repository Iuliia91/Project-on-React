import { createReducer } from '@reduxjs/toolkit'
import { userLoggedIn, userLoggedOut } from '../actions/userAction'

const InitialState = {
  userName: '',
  Gender: '',
  userHeigth: '',
  userWeigth: '',
  userGoaldWeigth: '',
  isLoggedIn: false,
}

const userReducer = createReducer(InitialState, (builder) => {
  builder.addCase(userLoggedIn, (state, action) => {
    state.userName = action.payload.userName
    state.userRole = action.payload.Gender
    state.userRole = action.payload.userHeigth
    state.userRole = action.payload.userWeigth
    state.userRole = action.payload.userGoaldWeigth
    state.isLoggedIn = action.payload.isLoggedIn
  })
  /*.addCase(userLoggedOut, (state, action) => {
      state.userName = ''
      state.userRole = []
      state.isLoggedIn = false
    })*/
})

export default userReducer

/*const InitialState = {
  userName: '',
  userRole: [],
  isLoggedIn: false,
}

const userReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.userName = action.payload.userName
      state.userRole = action.payload.userRole
      state.isLoggedIn = action.payload.isLoggedIn
    })
    .addCase(userLoggedOut, (state, action) => {
      state.userName = ''
      state.userRole = []
      state.isLoggedIn = false
    })
})

export default userReducer*/
