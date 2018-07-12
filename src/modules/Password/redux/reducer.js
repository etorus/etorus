import * as constants from './constants'

const initial = {
  inputs: {},
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
    error,
    message,
    validation,
  }
) => {

  switch (type) {
    case constants.CHANGE_INPUT:
      return { ...state, inputs: { ...state.inputs, [name]: value } }

    case constants.PASSWORD_CALLING:
      return { ...state, calling: true }

    case constants.PASSWORD_RECEIVE:
      return { ...state, calling: false }

    case constants.PASSWORD_SUCCESS:
      return { ...state }

    case constants.PASSWORD_ERROR:
      return { ...state, message, error }

    case constants.PASSWORD_VALIDATION:
      return { ...state, validation }

    default:
      return state
  }

}
