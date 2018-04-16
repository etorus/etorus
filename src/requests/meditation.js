import { authRequest } from './base'

export const index = ({ navigation }) => authRequest({
  path: '/meditations',
  options: {
    method: 'GET'
  },
  navigation,
})
