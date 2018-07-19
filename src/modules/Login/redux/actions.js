import { AsyncStorage } from 'react-native'
import * as constants from './constants'
import validate from '../validate'
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

export const authValidation = ({ validation }) =>
  ({ type: constants.AUTH_VALIDATION, validation })

export const pressAccess = ({ email, password, navigation, formatMessage }) =>
  dispatch => {
    const validation = validate({ email, password }, formatMessage)

    if (validation) {
      return dispatch(authValidation({ validation }))
    }

    dispatch(authValidation({ validation }))
    dispatch(authCalling())

    return auth({ email, password })
      .then(response => response.json())
      .then(({ message, auth_token: authToken }) => {
        dispatch(authReceive())

        if (authToken) {
          dispatch(authError({ message: '', error: 0 }))

          return AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken, () => {
            dispatch(authSuccess({ authToken }))
            return navigation.navigate('App')
          })
        }
        
        if (message) {
          if (message.match('Invalid credentials')) {
            return dispatch(authError({
              message: formatMessage({ id: 'login.errors.invalid_credentials' }),
              error: 1
            }))
          }

          return dispatch(authError({
            message: formatMessage({ id: 'login.errors.unknown' }, { code: '2' }),
            error: 2
          }))
        }
      })
      .catch(
        message => dispatch(authError({ message, error: 3 }))
      )
  }

export const pressFacebook = ({ navigation }) =>
  dispatch => {
    dispatch(authCalling())

    const error = payload => dispatch(authError(payload))
    const success = data =>
      facebook({ access_code: data.accessToken })
        .then(response => response.json())
        .then(({ message, auth_token: authToken }) => {
          dispatch(authReceive())

          if (message) {
            return error({ message, error: 1 })
          }

          if (authToken) {
          dispatch(authError({ message: '', error: 0 }))

          return AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken, () => {
            dispatch(authSuccess({ authToken }))
            return navigation.navigate('App')
          })
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
