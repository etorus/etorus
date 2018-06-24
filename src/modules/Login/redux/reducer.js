import * as constants from './constants'

const initial = {
  inputs: {},
  authToken: '',
  calling: false,
  message: '',
  error: 0,
  validation: {},
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
    validation,
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

    case constants.AUTH_VALIDATION:
      return { ...state, validation }

    default:
      return state
  }

}
