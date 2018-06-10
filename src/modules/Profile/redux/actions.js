import { AsyncStorage } from 'react-native'
import * as constants from './constants'

import { profileSuccess } from 'modules/Sidebar'

import { update } from 'requests/user'

export const changeInput = ({ name, value }) =>
  ({ type: constants.CHANGE_INPUT, name, value })

export const updateCalling = () =>
  ({ type: constants.UPDATE_CALLING })

export const updateReceive = () =>
  ({ type: constants.UPDATE_RECEIVE })

export const updateSuccess = ({ user }) =>
  ({ type: constants.UPDATE_SUCCESS, user })

export const updateError = ({ error, message }) =>
  ({ type: constants.UPDATE_ERROR, error, message })

export const pressSave = ({ fields, navigation, id }) =>
  dispatch => {
    dispatch(updateCalling())

    return update({ body: fields, navigation, id })
      .then(response => response.json())
      .then(({ message, data: user }) => {
        dispatch(updateReceive())

        if (message) {
          return dispatch(updateError({ message, error: 2 }))
        }

        dispatch(updateError({ message: '', error: 0 }))
        dispatch(updateSuccess({ user }))
        return dispatch(profileSuccess({ profile: user }))
      })
      .catch(
        message => dispatch(updateError({ message, error: 3 }))
      )
  }
