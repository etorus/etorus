const URI = 'https://etorus-staging.herokuapp.com/'

export const getAuthToken = async function () {
  return await AsyncStorage.getItem('@EtorusStorage:AuthToken')
}

export const authRequest = ({ path, options }) => {
  return getAuthToken.then(
    authToken => fetch(`${URI}${path}`,
      {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          'Authorization': authToken,
        },
      }
    )
  )
}

export const unauthRequest = ({ path, options }) => fetch(`${URI}${path}`, {
  ...options,
  headers: {
    ...options.headers,
    'Content-Type': 'application/json',
  },
})
