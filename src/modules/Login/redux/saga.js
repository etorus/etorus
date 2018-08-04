import { call, select, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'
import { selectors } from 'modules/Shared'

export function *onPressAcess() {
  const { login } = yield select(selectors.forms);
  yield call(callApi, api.auth.login, login)
}

export default function *rootLogin() {
  yield takeEvery(constants.PRESS_ACCESS, onPressAcess)
}