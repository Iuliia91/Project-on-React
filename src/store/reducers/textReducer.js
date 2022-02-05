import { CARD_LIST_ACTIONS } from 'store/actionTypes'

const initialState = {
  textReducer: 'Privet iz Redux',
}

const textReducer = (store = initialState, action) => {
  switch (action.type) {
    case CARD_LIST_ACTIONS.add:
      return { ...store, text: action.payload }
    default:
      return { ...store }
  }
}

export default textReducer
