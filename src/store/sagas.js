import { all, fork } from 'redux-saga/effects'

import { saga as login } from 'modules/Login'
import { saga as home } from 'modules/Home'
import { saga as sidebar } from 'modules/Sidebar'

export default function *root() {
  yield all([
    fork(login),
    fork(home),
    fork(sidebar),
  ])
}
