import { exsampl } from 'store/actions/cardList'
import cardList from './productCardReducer'
import textReducer from './textReducer'
import { combineReducers } from 'redux'

const CommonReducer = combineReducers({
  cardList,
  textReducer,
})

export default CommonReducer
