import * as constants from './constants'

const initial = {
  inputs: {},
  user: {},
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
    user,
    message,
    error,
  }
) => {

  switch (type) {
    case constants.CHANGE_INPUT:
      return { ...state, inputs: { ...state.inputs, [name]: value } }

    case constants.UPDATE_CALLING:
      return { ...state, calling: true }

    case constants.UPDATE_RECEIVE:
      return { ...state, calling: false }

    case constants.UPDATE_SUCCESS:
      return { ...state, user }

    case constants.UPDATE_ERROR:
      return { ...state, message, error }

    default:
      return state
  }

}
