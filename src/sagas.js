import { all, fork } from 'redux-saga/effects'

import { sagas as api } from 'api'

export default function *root() {
  yield all([
    fork(api),
  ])
}
