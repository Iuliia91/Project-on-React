import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import { createAction } from '@reduxjs/toolkit'

/*export const exsampl = (text) => {
  return { type: 'CARD_LIST_ACTIONS.add', payload: text }
}*/

export const textAction = createAction('addCard')
