import * as constants from './constants'

const initial = {
  meditations: [],
  calling: false,
  message: '',
  error: 0,
  notification: false,
  menu: false,
  filter: constants.FILTER_STARTED,
}

export default (
  state = initial,
  {
    type,
    meditations,
    message,
    error,
  }
) => {
  switch (type) {
    case constants.MEDITATION_CALLING:
      return { ...state, calling: true }

    case constants.MEDITATION_RECEIVE:
      return { ...state, calling: false }

    case constants.MEDITATION_SUCCESS:
      return { ...state, meditations }

    case constants.MEDITATION_ERROR:
      return { ...state, message, error }

    case constants.OPEN_NOTIFICATIONS:
      return { ...state, notification: true }

    case constants.CLOSE_NOTIFICATIONS:
      return { ...state, notification: false }

    case constants.OPEN_MENU:
      return { ...state, menu: true }

    case constants.CLOSE_MENU:
      return { ...state, menu: false }

    case constants.FILTER_STARTED:
      return { ...state, filter: constants.FILTER_STARTED }

    case constants.FILTER_NEXT:
      return { ...state, filter: constants.FILTER_NEXT }

    default:
      return state
  }
}
