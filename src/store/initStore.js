import CommonReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'

const middleWare = []
const middleWareEnhancer = applyMiddleware(...middleWare)
const enhasers = []

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__(...enhasers)
  : compose([...enhasers])
const store = createStore(CommonReducer, undefined, composedEnhancers)

export default store
