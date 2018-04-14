import {
  MEDITATIONS_CALLING,
  MEDITATIONS_RECEIVE,
  MEDITATIONS_SUCCESS,
  MEDITATIONS_ERROR,
  OPEN_NOTIFICATIONS,
  CLOSE_NOTIFICATIONS,
  FILTER_STARTED,
  FILTER_NEXT,
  OPEN_MENU,
  CLOSE_MENU,
} from './constants'

const initial = {
  meditations: [],
  calling: false,
  message: '',
  error: 0,
  notification: false,
  menu: false,
  filter: FILTER_STARTED,
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

    case MEDITATION_CALLING:
      return { ...state, calling: true }

    case MEDITATION_RECEIVE:
      return { ...state, calling: false }

    case MEDITATION_SUCCESS:
      return { ...state, meditations }

    case MEDITATION_ERROR:
      return { ...state, message, error }

    case OPEN_NOTIFICATIONS:
      return { ...state, notification: true }

    case CLOSE_NOTIFICATIONS:
      return { ...state, notification: false }

    case OPEN_MENU:
      return { ...state, menu: true }

    case CLOSE_MENU:
      return { ...state, menu: false }

    case FILTER_STARTED:
      return { ...state, filter: FILTER_STARTED }

    case FILTER_NEXT:
      return { ...state, filter: FILTER_NEXT }

    default:
      return state
  }

}
