import { CARD_LIST_ACTIONS } from 'store/actionTypes'

const initialState = {
  cardList: null,
}

const cardList = (store = initialState, action) => {
  switch (action.type) {
    case CARD_LIST_ACTIONS.list:
      return { ...store, cardList: [...action.payload] }
    default:
      return { ...store }
  }
}

export default cardList
