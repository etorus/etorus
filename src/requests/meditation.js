import { authRequest } from './base'

export const index = () => authRequest({
  path: '/importations',
  options: {
    method: 'GET'
  },
})
