import { exsampl } from 'store/actions/cardList'
import productCardReducer from './productCardReducer'

import userReducer from './userReducer'
import globalApiStateReducer from './globalApiStateReducer'
import { combineReducers } from 'redux'
import exampleOfMenueReducer from './exampleOfMenueReducer'
const CommonReducer = combineReducers({
  userReducer,
  productCardReducer,
  exampleOfMenueReducer,
  globalApiStateReducer,
})

export default CommonReducer
