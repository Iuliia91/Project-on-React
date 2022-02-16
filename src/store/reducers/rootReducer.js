import { exsampl } from 'store/actions/cardList'
import cardList from './productCardReducer'
import textReducer from './textReducer'
import userReducer from './userReducer'
import globalApiStateReducer from './globalApiStateReducer'
import { combineReducers } from 'redux'

const CommonReducer = combineReducers({
  userReducer,
  cardList,
  textReducer,
  globalApiStateReducer,
})

export default CommonReducer
