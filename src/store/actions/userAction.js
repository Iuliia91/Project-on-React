import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { USER_ACTION } from 'store/actionTypes'
import Server from 'api/server.instance'
export const userLoggedIn = createAction(USER_ACTION.loggIn)

export const userLoggedOut = createAction(USER_ACTION.loggOut)

export const usersWeigth = createAction(USER_ACTION.weigth)

export const amountOfLosedWeigth = createAction(USER_ACTION.loseWeigthAmount)
