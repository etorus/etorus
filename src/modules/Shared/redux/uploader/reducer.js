import * as constants from './constants'

const initial = {
  image: null,
  calling: false,
  error: null,
  url: null,
}

export default (
  state = initial,
  {
    type,
    image,
    error,
    url,
  }
) => {

  switch (type) {

    case constants.SELECT_IMAGE:
      return { ...state, image }

    case constants.UPLOAD_CALLING:
      return { ...state, calling: true }

    case constants.UPLOAD_RECEIVE:
      return { ...state, calling: false }

    case constants.UPLOAD_SUCCESS:
      return { ...state, url }

    case constants.UPLOAD_ERROR:
      return { ...state, error }

    default:
      return state
  }

}
