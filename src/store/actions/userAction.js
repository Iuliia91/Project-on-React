import { createAction } from '@reduxjs/toolkit'
import { USER_ACTION } from 'store/actionTypes'

export const userLoggedIn = createAction(USER_ACTION.loggIn)

export const userLoggedOut = createAction(USER_ACTION.loggOut)
