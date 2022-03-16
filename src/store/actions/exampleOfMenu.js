import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import Server from 'api/server.instance'

export const ExampleOfMenue = createAsyncThunk(
  'menu_example',

  async () => {
    const response = await Server.get('/phase')

    console.log(response.data)
    return response.data
  }
)
