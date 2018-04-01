import {
  CHANGE_INPUT,
  AUTH_CALLING,
  AUTH_RECEIVE,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './constants'

const initial = {
  inputs: {},
  authToken: '',
  calling: false,
  message: '',
  error: 0,
}

export default (
  state = initial,
  {
    type,
    name,
    value,
    authToken,
    message,
    error,
  }
) => {

  switch (type) {
    case CHANGE_INPUT:
      return { ...state, inputs: { ...inputs, [name]: value } }

    case AUTH_CALLING:
      return { ...state, calling: true }

    case AUTH_RECEIVE:
      return { ...state, calling: false }

    case AUTH_SUCCESS:
      return { ...state, authToken }

    case AUTH_ERROR:
      return { ...state, message, error }

    default:
      return state
  }

}
