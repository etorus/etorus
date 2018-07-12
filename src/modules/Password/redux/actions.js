import * as constants from './constants'
import validate from '../validate'

import { reset } from 'requests/password'

export const passwordCalling = () =>
  ({ type: constants.PASSWORD_CALLING })

export const passwordReceive = () =>
  ({ type: constants.PASSWORD_RECEIVE })

export const passwordSuccess = () =>
  ({ type: constants.PASSWORD_SUCCESS })

export const changeInput = ({ name, value }) =>
  ({ type: constants.CHANGE_INPUT, name, value })

export const passwordError = ({ error, message }) =>
  ({ type: constants.PASSWORD_ERROR, error, message })

export const passwordValidation = ({ validation }) =>
  ({ type: constants.PASSWORD_VALIDATION, validation })

export const pressSend = ({ fields, navigation, formatMessage }) =>
  dispatch => {
    const validation = validate(fields, formatMessage)

    if (validation) {
      return dispatch(passwordValidation({ validation }))
    }

    dispatch(passwordValidation({ validation: {} }))

    reset({ body: fields, navigation })
      .then(response => response.json())
      .then(({ message }) => {
        dispatch(passwordReceive())

        if (message) {
          return dispatch(passwordError({ error: 1, message }))
        }

        return dispatch(passwordSuccess())
      })
      .catch(
        error => dispatch(passwordError({ error: 2, message: error }))
      )
  }
