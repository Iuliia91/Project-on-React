import { createReducer } from '@reduxjs/toolkit'
import {
  userLoggedIn,
  userLoggedOut,
  usersWeigth,
  amountOfLosedWeigth,
} from '../actions/userAction'

const InitialState = {
  userName: '',
  userGrowth: '',
  userWeigth: '',
  userWeigthToday: '',
  userGoaldWeigth: '',
  procent: '0',
  amountOfDroppedWeigth: '',
  userListOfWeifth: [],
  id: '',
  isLoggedIn: false,
  isEdited: false,
}

const userReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(userLoggedIn, (state, action) => {
      state.userName = action.payload.userName
      state.userGrowth = action.payload.userGrowth
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
    .addCase(amountOfLosedWeigth, (state, action) => {
      state.amountOfDroppedWeigth = action.payload
    })

    .addCase(usersWeigth, (state, action) => {
      state.userWeigthToday = action.payload.weigthValue
      state.amountOfDroppedWeigth = action.payload
      const proportion = (state.userWeigth - state.userGoaldWeigth) / 100
      const item = Math.round(
        (state.userGoaldWeigth - state.userWeigthToday) / proportion
      )
      const procentValue = 100 + item + '%'

      if (state.userWeigthToday > state.userWeigth) {
        state.procent = 0
        console.log(state.procent)
      } else {
        state.procent = procentValue
        console.log(state.procent)
      }

      state.userListOfWeifth.push(action.payload)
    })
})

export default userReducer
