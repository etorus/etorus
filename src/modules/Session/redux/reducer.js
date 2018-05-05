import * as constants from './constants'

const initial = {
  meditation: {},
  calling: false,
  message: '',
  error: 0,
}

export default (
  state = initial,
  {
    type,
    meditation,
    message,
    error,
  }
) => {
  switch (type) {
    case constants.SESSION_CALLING:
      return { ...state, calling: true }

    case constants.SESSION_RECEIVE:
      return { ...state, calling: false }

    case constants.SESSION_SUCCESS:
      return { ...state, meditation }

    case constants.SESSION_ERROR:
      return { ...state, message, error }

    default:
      return state
  }
}
