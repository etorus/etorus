import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import sagas from './sagas'

import { reducer as api } from 'api'
import { reducer as shared } from 'modules/Shared'
import { reducer as login } from 'modules/Login'
import { reducer as home } from 'modules/Home'
import { reducer as session } from 'modules/Session'
import { reducer as signup } from 'modules/Signup'
import { reducer as sidebar } from 'modules/Sidebar'
import { reducer as profile } from 'modules/Profile'
import { reducer as password } from 'modules/Password'

export const sagaMiddleware = createSagaMiddleware()
export const middlewares = [
  sagaMiddleware,
  logger,
]

const store = createStore(
  combineReducers({
    api,
    shared,
    login,
    home,
    session,
    signup,
    sidebar,
    profile,
    password,
  }),
  applyMiddleware(...middlewares),
)

sagaMiddleware.run(sagas)

export default store
