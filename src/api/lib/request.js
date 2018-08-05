import handleError from './handleError'
import handleResponse from './handleResponse'
import { AsyncStorage } from 'react-native'

// const URI = 'https://etorus-staging.herokuapp.com'
const URI = 'http://192.168.1.43:3000'

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
    })
    .then(handleResponse)
    .catch(handleError)
  )

const unauthRequest = ({ path, body, method }) => 
  fetch(`${URI}${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(handleResponse)
  .catch(handleError)

export default ({ auth = false, path, body, method = 'GET' }) => {
  return auth
    ? authRequest({ path, body, method })
    : unauthRequest({ path, body, method })
}