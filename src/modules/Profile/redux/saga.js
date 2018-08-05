import { call, select, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'
import { selectors } from 'modules/Shared'

export function *onPressSave() {
  const { profile } = yield select(selectors.forms)

  yield call(callApi, api.profile.update, profile)
}

export default function *rootProfile() {
  yield takeEvery(constants.PRESS_SAVE, onPressSave)
}
