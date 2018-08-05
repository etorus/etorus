import { call, select, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'
import { selectors } from 'modules/Shared'

export function *onPressSend() {
  const { password } = yield select(selectors.forms)

  yield call(callApi, api.password.reset, password)
}

export default function *rootPassword() {
  yield takeEvery(constants.PRESS_SEND, onPressSend)
}
