import { AsyncStorage } from 'react-native'

// TODO: Change to an env variable
const URI = 'http://localhost:3000'

export const getAuthToken = async () => {
  const authToken = AsyncStorage.getItem('@EtorusStorage::APIAuthToken')
  return await authToken
}

export const authRequest = ({ path, options, navigation }) => {
  return getAuthToken().then(
    authToken => fetch(`${URI}${path}`,
      {
        ...options,
        body: JSON.stringify(options.body),
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      }
    ).then(response => {
      if (response.ok) {
        return response.json()
      }

      return AsyncStorage.clear(() => {
        return navigation.navigate('Auth')
      })
    })
  )
}

export const unauthRequest = ({ path, options }) => fetch(`${URI}${path}`, {
  ...options,
  body: JSON.stringify(options.body),
  headers: {
    ...options.headers,
    'Content-Type': 'application/json',
  },
})
