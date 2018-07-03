import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import { reducer as login } from './modules/Login'
import { reducer as home } from './modules/Home'
import { reducer as session } from './modules/Session'
import { reducer as signup } from './modules/Signup'
import { reducer as sidebar } from './modules/Sidebar'
import { reducer as profile } from './modules/Profile'
import { reducer as shared } from './modules/Shared'

const middlewares = [thunk]

const store = createStore(
  combineReducers({
    login,
    home,
    session,
    signup,
    sidebar,
    profile,
    shared,
  }),
  applyMiddleware(...middlewares),
)

export default store
