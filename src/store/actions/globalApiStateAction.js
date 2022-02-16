import { createAction } from '@reduxjs/toolkit'
import { Global_Api_Error } from 'store/actionTypes'

export const globalApiAction = createAction(Global_Api_Error.apiError)
