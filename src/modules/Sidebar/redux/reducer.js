import * as constants from './constants'

const initial = {
  profile: {
    attributes: {
      name: '',
      avatar: '',
    },
  },
  calling: false,
  message: '',
  error: 0,
}

export default (
  state = initial,
  {
    type,
    profile,
    message,
    error,
  }
) => {
  switch (type) {
    case constants.PROFILE_CALLING:
      return { ...state, calling: true }

    case constants.PROFILE_RECEIVE:
      return { ...state, calling: false }

    case constants.PROFILE_SUCCESS:
      return { ...state, profile }

    case constants.PROFILE_ERROR:
      return { ...state, message, error }

    default:
      return state
  }
}
