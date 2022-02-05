import { exsampl } from 'store/actions/cardList'
import cardList from './rardStateReducer'
import textReducer from './textReducer'
import { combineReducers } from 'redux'

const CommonReducer = combineReducers({
  cardList,
  textReducer,
})

export default CommonReducer
