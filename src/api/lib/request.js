import handleError from './handleError';
import { AsyncStorage } from 'react-native'

const URI = 'https://etorus-staging.herokuapp.com'

export const getAuthToken = async () => {
  const authToken = AsyncStorage.getItem('@EtorusStorage::APIAuthToken')
  return await authToken
}

const authRequest = ({ path, body, method }) =>
  getAuthToken().then(authToken => 
    fetch(`${URI}${path}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    }).catch(handleError)
  )

const unauthRequest = ({ path, body, method }) => 
  fetch(`${URI}${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(handleError)

export default ({ auth, path, body, method }) => {
  return auth
    ? authRequest({ path, body, method })
    : unauthRequest({ path, body, method })
}