import { authRequest } from './base'

export const index = ({ navigation }) => authRequest({
  path: '/meditations',
  options: {
    method: 'GET',
  },
  navigation,
})

export const show = ({ id, navigation }) => authRequest({
  path: `/meditations/${id}`,
  options: {
    method: 'GET',
  },
  navigation,
})
