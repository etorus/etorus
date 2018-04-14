import { AsyncStorage } from 'react-native'

import {
  CHANGE_INPUT,
  AUTH_CALLING,
  AUTH_RECEIVE,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './constants'

import { auth, facebook, loginFacebookSDK } from 'requests'

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
      .then(async ({ message, auth_token: authToken }) => {
        dispatch(authReceive())

        if (message) {
          return dispatch(authError({ message, error: 1 }))
        }

        if (authToken) {
          dispatch(authError({ message, error: 0 }))
          await AsyncStorage.setItem('@EtorusStorage:AuthToken', authToken)

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
        message => dispatch(authError({ message, error: 3 }))
      )
  }

export const pressFacebook = () =>
  dispatch => {
    dispatch(authCalling())

    const error = payload => dispatch(authError(payload))
    const success = data =>
      facebook({ access_code: data.accessToken })
        .then(response => response.json())
        .then(async ({ message, auth_token: authToken }) => {
          dispatch(authReceive())

          if (message) {
            return error({ message, error: 1 })
          }

          if (authToken) {
            error({ message, error: 0 })
            await AsyncStorage.setItem('@EtorusStorage:AuthToken', authToken)

            return dispatch(authSuccess({ authToken }))
          }

          return error({
            message: `Message: ${message} - authToken: ${authToken}`,
            error: 2,
          })
        })
        .catch(
          message => error({ message, error: 3 })
        )

    loginFacebookSDK(success, error)
  }
