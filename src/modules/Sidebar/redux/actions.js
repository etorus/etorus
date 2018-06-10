import * as constants from './constants'
import { profile } from 'requests/user'

export const profileCalling = () =>
  ({ type: constants.PROFILE_CALLING })

export const profileReceive = () =>
  ({ type: constants.PROFILE_RECEIVE })

export const profileSuccess = ({ profile }) =>
  ({ type: constants.PROFILE_SUCCESS, profile })

export const profileError = ({ error, message }) =>
  ({ type: constants.PROFILE_ERROR, error, message })

export const fetchProfile = ({ navigation }) =>
  dispatch => {
    dispatch(profileCalling())

    return profile({ navigation })
      .then(
        ({ message, data: profile }) => {
          dispatch(profileReceive())

          console.log(profile)
          console.log(message)

          if (message) {
            return dispatch(profileError({ error: 1, message }))
          }

          dispatch(profileError({ error: 0, message: '' }))
          return dispatch(profileSuccess({ profile }))
        },
        error => dispatch(profileError({ error: 2, message: error }))
      ).catch(
        message => profileError({ message, error: 3 })
      )
  }
