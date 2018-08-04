import { call, put } from 'redux-saga/effects'
import { apiStatuses } from './constants'
import apiStatusChange from './actions'

import api from 'api'

export default function *callApi(apiCall, ...args) {
  const { key, opts } = apiCall

  try {
    debugger

    yield put(apiStatusChange(key, apiStatuses.STARTED))

    const { data } = yield call(api.request, { ...opts(...args) })

    yield put(apiStatusChange(key, apiStatuses.SUCCESS, data, args))
    
    return data
  } catch (error) {
    yield put(apiStatusChange(key, apiStatuses.FAIL, error))
  }
}
