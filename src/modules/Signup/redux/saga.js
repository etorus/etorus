import { call, select, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'
import { selectors } from 'modules/Shared'

export function *onPressSignup() {
  const { signup } = yield select(selectors.forms)

  yield call(callApi, api.auth.signup, signup)
}

export default function *rootSignup() {
  yield takeEvery(constants.PRESS_SIGNUP, onPressSignup)
}
