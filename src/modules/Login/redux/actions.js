import { AsyncStorage } from 'react-native'
import * as constants from './constants'

import { auth, facebook, loginFacebookSDK } from 'requests/auth'

export const changeInput = ({ name, value }) =>
  ({ type: constants.CHANGE_INPUT, name, value })

export const authCalling = () =>
  ({ type: constants.AUTH_CALLING })

export const authReceive = () =>
  ({ type: constants.AUTH_RECEIVE })

export const authSuccess = ({ authToken }) =>
  ({ type: constants.AUTH_SUCCESS, authToken })

export const authError = ({ error, message }) =>
  ({ type: constants.AUTH_ERROR, error, message })

export const pressAccess = ({ email, password, navigation }) =>
  dispatch => {
    dispatch(authCalling())

    return auth({ email, password })
      .then(response => response.json())
      .then(({ message, auth_token: authToken }) => {
        dispatch(authReceive())

        if (message) {
          return dispatch(authError({ message, error: 1 }))
        }

        if (authToken) {
          dispatch(authError({ message: '', error: 0 }))

          return AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken, () => {
            dispatch(authSuccess({ authToken }))
            return navigation.navigate('App')
          })
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
            error({ message: '', error: 0 })
            await AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken)

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

    return loginFacebookSDK(success, error)
  }
