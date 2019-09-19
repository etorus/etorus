import { unauthRequest } from './base'
import {
  LoginManager,
  AccessToken,
} from 'react-native-fbsdk'

export const auth = body => unauthRequest({
  path: '/auth/login',
  options: {
    body,
    method: 'POST'
  },
})

export const facebook = body => unauthRequest({
  path: '/auth/facebook',
  options: {
    body,
    method: 'POST'
  }
})

export const signup = body => unauthRequest({
  path: '/signup',
  options: {
    body,
    method: 'POST'
  }
})

export const loginFacebookSDK = (successAction, errorAction) =>
  LoginManager.logInWithPermissions(['public_profile']).then(
    result => {
      if (result.error) {
        return errorAction({ error: 6, message: result.error })
      }

      if (result.isCancelled) {
        return errorAction({ error: 7, message: 'User cancel login' })
      }

      return AccessToken.getCurrentAccessToken().then(
        data => successAction(data),
        error => errorAction({ error: 8, message: `callback error AccessToken ${error}` })
      ).catch(
        error => errorAction({ error: 8, message: `catch AccessToken ${error}` })
      )
    },
    (error) => {
      errorAction({ error: 9, message: `callback error LoginManager ${error}`})
      LoginManager.logOut()
      loginFacebookSDK(successAction, errorAction)
    }
  ).catch(
    error => errorAction({ error: 9, message: `catch LoginManager ${error}` })
  )
