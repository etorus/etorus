import thunk from 'redux-thunk'

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import { reducer as login } from './modules/Login'

const store = createStore(
  combineReducers({
    login,
  }),
  applyMiddleware(thunk),
)

export default store
