import * as constants from './constants'

export const changeInput = ({ form, name, value }) => ({
  type: constants.CHANGE_INPUT,
  form,
  name,
  value,
})
