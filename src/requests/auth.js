import { unauthRequest } from './base'

const auth = body => unauthRequest({
  path: '/auth/login',
  options: {
    body,
    method: 'POST'
  }
})

export default auth
