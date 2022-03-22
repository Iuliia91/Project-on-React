import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import Server from 'api/server.instance'

export const amountCaloriesPerDay = createAction('amout_calories_per_day')

export const userMenu = createAction('user_menu_create')

export const ExampleOfMenue = createAsyncThunk(
  'menu_example',

  async () => {
    const response = await Server.get('/phase')

    console.log(response.data)
    return response.data
  }
)
