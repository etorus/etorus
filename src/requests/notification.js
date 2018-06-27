import { authRequest } from './base'

export const index = ({ navigation }) => authRequest({
  path: '/notifications',
  options: {
    method: 'GET',
  },
  navigation,
})

export const create = ({ fields, navigation }) => authRequest({
  path: '/notifications',
  options: {
    method: 'POST',
    body: fields,
  },
  navigation,
})
