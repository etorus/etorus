import * as constants from './constants'

export const selectImage = ({ image }) =>
  ({ type: constants.SELECT_IMAGE, image })

export const uploadImage = ({ options: { mime, path } }, onUpload) => ({
  type: constants.UPLOAD_IMAGE,
  mime,
  path,
  onUpload,
})
