import { authRequest } from './base'

export const profile = ({ navigation }) => authRequest({
  path: `/users/profile`,
  options: {
    method: 'GET',
  },
  navigation,
})

export const update = ({ body, id, navigation }) => authRequest({
  path: `/users/${id}`,
  options: {
    method: 'PUT',
    body,
  },
  navigation,
})
