import CommonReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { enableES5 } from 'immer'
enableES5()

const middleWare = []
const middleWareEnhancer = applyMiddleware(...middleWare)
const enhasers = []

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__(...enhasers)
  : compose([...enhasers])

const persistConfig = {
  key: 'root',
  storage,
}
const persisterRootReducer = persistReducer(persistConfig, CommonReducer)
export const persist = persistStore(store)

export const store = createStore(
  persisterRootReducer,
  undefined,
  composedEnhancers
)
