import * as constants from './constants'

const initial = {
  session: {},
  calling: false,
  message: '',
  error: 0,
}

export default (
  state = initial,
  {
    type,
    session,
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
      return { ...state, session }

    case constants.SESSION_ERROR:
      return { ...state, message, error }

    default:
      return state
  }
}
