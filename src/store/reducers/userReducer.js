import { createReducer } from '@reduxjs/toolkit'
import { userLoggedIn, userLoggedOut, usersWeigth } from '../actions/userAction'

const InitialState = {
  userName: '',
  userWeigth: '',
  userWeigthToday: '',
  userGoaldWeigth: '',
  procent: '0',
  userListOfWeifth: [],
  id: '',
  isLoggedIn: false,
  isEdited: false,
}

const userReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.userName = action.payload.userName
      state.userWeigth = action.payload.userWeigth
      state.userGoaldWeigth = action.payload.userGoaldWeigth
      state.userWeigthToday = state.userWeigth
      state.id = action.payload.id
      state.isLoggedIn = action.payload.isLoggedIn
      state.userListOfWeifth.push({
        weigthValue: state.userWeigth,
        day: 8,
      })
    })
    .addCase(userLoggedOut, (state, action) => {
      state.userName = ''

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

      //if (action.payload.day== day.getDate())
      //state.userListOfWeifth.push(action.payload)
    })
})

export default userReducer
