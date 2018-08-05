import { call, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'

export function *onLoadMeditations() {
  yield call(callApi, api.meditations.load)
}

export default function *rootHome() {
  yield takeEvery(constants.LOAD_MEDITATIONS, onLoadMeditations)
}