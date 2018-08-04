import * as constants from './constants'

export default (state = {}, { type, form, name, value }) => {
  switch (type) {
    case constants.CHANGE_INPUT:
      return { ...state, [form]: { ...state[form], [name]: value } }

    default:
      return state
  }
}
