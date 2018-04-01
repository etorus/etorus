import {
  CHANGE_INPUT,
  AUTH_CALLING,
  AUTH_RECEIVE,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './constants'

import { auth } from '../../../requests'

export const changeInput = ({ name, value }) =>
  ({ type: CHANGE_INPUT, name, value })

export const authCalling = () =>
  ({ type: AUTH_CALLING })

export const authReceive = () =>
  ({ type: AUTH_RECEIVE })

export const authSuccess = ({ authToken }) =>
  ({ type: AUTH_SUCCESS, authToken })

export const authError = ({ error, message }) =>
  ({ type: AUTH_ERROR, error, message })

export const pressAccess = ({ email, password }) =>
  dispatch => {
    dispatch(authCalling())

    auth({ email, password })
      .then(response => response.json())
      .then(({ message, auth_token: authToken }) => {
        dispatch(authReceive())

        if (message) {
          return dispatch(authError({ message, error: 1 }))
        }

        if (authToken) {
          return dispatch(authSuccess({ authToken }))
        }

        return dispatch(
          authError({
            message: `Message: ${message} - authToken: ${authToken}`,
            error: 2,
          })
        )
      })
      .catch(
        error => dispatch(authError({ message: error, error: 3 }))
      )
  }
