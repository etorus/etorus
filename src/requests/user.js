import { authRequest } from './base'

export const profile = ({ navigation }) => authRequest({
  path: `/users/profile`,
  options: {
    method: 'GET',
  },
  navigation,
})
