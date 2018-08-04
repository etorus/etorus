import { all, fork } from 'redux-saga/effects'

import { saga as login } from 'modules/Login'

export default function *root() {
  yield all([
    fork(login),
  ])
}
