import * as constants from './constants'
import { show } from 'requests/meditation'

export const sessionCalling = () =>
  ({ type: constants.SESSION_CALLING })

export const sessionReceive = () =>
  ({ type: constants.SESSION_RECEIVE })

export const sessionSuccess = ({ session }) =>
  ({ type: constants.SESSION_SUCCESS, session })

export const sessionError = ({ error, message }) =>
  ({ type: constants.SESSION_ERROR, error, message })
