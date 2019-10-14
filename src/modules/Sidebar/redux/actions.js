import { LoginManager, AccessToken } from 'react-native-fbsdk'

import * as constants from './constants'
import { profile, update } from 'requests/user'

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

export const addFacebook = ({ navigation }) =>
  dispatch => {
    dispatch(profileCalling())

    LoginManager.logInWithPermissions(['public_profile']).then(
      () => AccessToken.getCurrentAccessToken().then(
        data => updateProfile(data.userID, dispatch, navigation)
      )
    )
  }

export const removeFacebook = ({ navigation }) =>
  dispatch => {
    dispatch(profileCalling())

    return updateProfile('', dispatch, navigation)
  }

const updateProfile = (facebookId, dispatch, navigation) => 
  update({ body: { facebook_id: facebookId }, navigation })
    .then(
      ({ message, data: profile }) => {
        dispatch(profileReceive())

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