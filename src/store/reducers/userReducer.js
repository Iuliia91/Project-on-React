import { createReducer } from '@reduxjs/toolkit'
import { userLoggedIn, userLoggedOut, usersWeigth } from '../actions/userAction'

const InitialState = {
  userName: '',
  Gender: '',
  userHeigth: '',
  userWeigth: '',
  userWeigthToday: '',
  userGoaldWeigth: '',
  procent: '0',
  userListOfWeifth: [],
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

    .addCase(usersWeigth, (state, action) => {
      state.userWeigthToday = action.payload.weigthValue
      const proportion = (state.userWeigth - state.userGoaldWeigth) / 100
      const item = Math.round(
        (state.userGoaldWeigth - state.userWeigthToday) / proportion
      )
      const procentValue = 100 + item + '%'
      state.procent = procentValue

      state.userListOfWeifth.push(action.payload)
    })
})

export default userReducer
