import * as constants from './constants'

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
    case constants.CHANGE_INPUT:
      return { ...state, inputs: { ...state.inputs, [name]: value } }

    case constants.AUTH_CALLING:
      return { ...state, calling: true }

    case constants.AUTH_RECEIVE:
      return { ...state, calling: false }

    case constants.AUTH_SUCCESS:
      return { ...state, authToken }

    case constants.AUTH_ERROR:
      return { ...state, message, error }

    default:
      return state
  }

}
