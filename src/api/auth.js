import { apiCalls } from './redux/constants';

export default {
  login: {
    key: apiCalls.AUTH_LOGIN,
    opts: body => ({
      path: '/auth/login',
      method: 'POST',
      body,
    }),
  },
  signup: {
    key: apiCalls.AUTH_SIGNUP,
    opts: body => ({
      path: '/signup',
      method: 'POST',
      body,
    }),
  },
}
