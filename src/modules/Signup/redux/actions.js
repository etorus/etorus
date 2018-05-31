import { AsyncStorage } from 'react-native'
import * as constants from './constants'

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

export const pressSignup = ({ fields, navigation }) =>
  dispatch => {
    dispatch(signupCalling())

    return signup(fields)
      .then(response => response.json())
      .then(({ message, user, auth_token: authToken }) => {
        dispatch(signupReceive())

        if (authToken) {
          dispatch(signupError({ message: '', error: 0 }))

          return AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken, () => {
            dispatch(signupSuccess({ authToken }))
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
        message => dispatch(signupError({ message, error: 3 }))
      )
  }
