import thunk from 'redux-thunk'

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import { reducer as login } from './modules/Login'
import { reducer as home } from './modules/Home'
import { reducer as session } from './modules/Session'

const store = createStore(
  combineReducers({
    login,
    home,
    session,
  }),
  applyMiddleware(thunk),
)

export default store
