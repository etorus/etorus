import thunk from 'redux-thunk'

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import { reducer as login } from './modules/Login'
import { reducer as home } from './modules/Home'

const store = createStore(
  combineReducers({
    login,
    home,
  }),
  applyMiddleware(thunk),
)

export default store
