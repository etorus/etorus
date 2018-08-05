import * as constants from './constants'

export const loadProfile = () => ({
  type: constants.LOAD_PROFILE,
})

export const logout = () => ({
  type: constants.USER_LOGOUT,
})