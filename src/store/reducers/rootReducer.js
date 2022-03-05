import { exsampl } from 'store/actions/cardList'
import productCardReducer from './productCardReducer'
import textReducer from './textReducer'
import userReducer from './userReducer'
import globalApiStateReducer from './globalApiStateReducer'
import { combineReducers } from 'redux'

const CommonReducer = combineReducers({
  userReducer,
  productCardReducer,
  textReducer,

  globalApiStateReducer,
})

export default CommonReducer
