import { AsyncStorage } from 'react-native'
import * as constants from './constants'
import validate from '../validate'

import { signup } from 'requests/auth'

export const changeInput = ({ name, value }) =>
  ({ type: constants.CHANGE_INPUT, name, value })

export const signupCalling = () =>
  ({ type: constants.SIGNUP_CALLING })

export const signupReceive = () =>
  ({ type: constants.SIGNUP_RECEIVE })

export const signupSuccess = ({ authToken }) =>
  ({ type: constants.SIGNUP_SUCCESS, authToken })

export const signupError = ({ error, message }) =>
  ({ type: constants.SIGNUP_ERROR, error, message })

export const signupValidation = ({ validation }) =>
  ({ type: constants.SIGNUP_VALIDATION, validation })

export const pressSignup = ({ fields, formatMessage, navigation }) =>
  dispatch => {
    const validation = validate(fields, formatMessage)

    if (validation) {
      return dispatch(signupValidation({ validation }))
    }

    dispatch(signupValidation({ validation }))
    dispatch(signupCalling())

    return signup(fields)
      .then(response => response.json())
      .then(({
        message,
        user,
        auth_token: authToken,
      }) => {
        dispatch(signupReceive())
        dispatch(signupError({ message: '', error: 0 }))

        if (authToken) {
          return AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken, () => {
            dispatch(signupSuccess({ authToken }))
            return navigation.navigate('App')
          })
        }

        if (message) {
          if (message.match('Email')) {
            return dispatch(signupError({
              message: formatMessage({ id: 'signup.errors.email_duplicated' }),
              error: 1
            }))
          }

          return dispatch(signupError({
            message: formatMessage({ id: 'signup.errors.unknown' }, { code: '2' }),
            error: 2
          }))
        }
      })
      .catch(message => dispatch(signupError({
        message: formatMessage({ id: 'signup.errors.unknown' }, { code: '3' }),
        error: 3
      })))
  }
