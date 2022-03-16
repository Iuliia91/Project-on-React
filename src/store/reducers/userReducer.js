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
  bodyMassIndex: '',
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
      const weigth = action.payload
      console.log(weigth)
      if (weigth >= state.userWeigth) {
        const difference = weigth - state.userWeigth
        state.amountOfDroppedWeigth = `You up on weigth + ${difference}kg`
      } else {
        const difference = state.userWeigth - weigth
        state.amountOfDroppedWeigth = `You lost - ${difference} kg`
      }
    })

    .addCase(usersWeigth, (state, action) => {
      state.userWeigthToday = action.payload.weigthValue

      const proportion = (state.userWeigth - state.userGoaldWeigth) / 100
      const item = Math.round(
        (state.userGoaldWeigth - state.userWeigthToday) / proportion
      )
      const procentValue = 100 + item + '%'

      if (state.userWeigthToday > state.userWeigth) {
        state.procent = 0
      } else {
        state.procent = procentValue
      }

      state.userListOfWeifth.push(action.payload)
    })
})

export default userReducer
