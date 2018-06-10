import uuid from 'uuid/v4'

import * as constants from './constants'
import { upload } from 'requests/upload'

export const uploadCalling = () =>
  ({ type: constants.UPLOAD_CALLING })

export const uploadReceive = () =>
  ({ type: constants.UPLOAD_RECEIVE })

export const uploadSuccess = ({ url }) =>
  ({ type: constants.UPLOAD_SUCCESS, url })

export const uploadError = ({ error }) =>
  ({ type: constants.UPLOAD_ERROR, error })

export const selectImage = ({ image }) =>
  ({ type: constants.SELECT_IMAGE, image })

export const uploadImage = ({ options: { mime, path } }, onUpload) =>
  dispatch => {
    dispatch(uploadCalling())

    const uri = `file://${path}`
    const name = `${uuid()}.${mime.split('/')[1]}`

    const file = {
      type: mime,
      uri,
      name,
    }

    return upload(file).then(({ status, body }) => {
      dispatch(uploadReceive())

      if (status !== 201) {
        return dispatch(uploadError({ error: body }))
      }

      const url = body.postResponse.location

      onUpload(url)
      return dispatch(uploadSuccess({ url }))
    })
  }
