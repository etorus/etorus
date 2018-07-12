import { unauthRequest } from './base'

export const reset = ({ navigation, body }) => unauthRequest({
  path: '/passwords/reset',
  options: {
    method: 'POST',
    body,
  },
  navigation,
})
