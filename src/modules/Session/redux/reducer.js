import * as constants from './constants'

const initial = {
  notification: {},
  calling: false,
  message: '',
  error: 0,
}

export default (
  state = initial,
  {
    type,
    notification,
    message,
    error,
  }
) => {
  switch (type) {
    case constants.NOTIFICATION_CALLING:
      return { ...state, calling: true }

    case constants.NOTIFICATION_RECEIVE:
      return { ...state, calling: false }

    case constants.NOTIFICATION_SUCCESS:
      return { ...state, notification }

    case constants.NOTIFICATION_ERROR:
      return { ...state, message, error }

    default:
      return state
  }
}
