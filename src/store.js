import thunk from 'redux-thunk'

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
  applyMiddleware(thunk),
)

export default store
