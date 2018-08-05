import { call, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'

export function *onLoadProfile() {
  yield call(callApi, api.profile.load)
}

export default function *rootSidebar() {
  yield takeEvery(constants.LOAD_PROFILE, onLoadProfile)
}