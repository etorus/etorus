import { all, fork } from 'redux-saga/effects'

import { saga as login } from 'modules/Login'
import { saga as home } from 'modules/Home'
import { saga as sidebar } from 'modules/Sidebar'
import { saga as password } from 'modules/Password'
import { saga as profile } from 'modules/Profile'
import { saga as session } from 'modules/Session'
import { sagas } from 'modules/Shared'

export default function *root() {
  yield all([
    fork(sagas.uploader),
    fork(login),
    fork(home),
    fork(sidebar),
    fork(password),
    fork(profile),
    fork(session),
  ])
}
