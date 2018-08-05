import uuid from 'uuid/v4'
import { call, select, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'

import upload from 'api/upload'

export function *onUploadImage({ mime, path, onUpload }) {
  const uri = `file://${path}`
  const name = `${uuid()}.${mime.split('/')[1]}`

  const file = {
    type: mime,
    uri,
    name,
  }

  response = yield call(upload, file)

  onUpload(response.body.postResponse.location)
  return response
}

export default function *rootUploader() {
  yield takeEvery(constants.UPLOAD_IMAGE, onUploadImage)
}
