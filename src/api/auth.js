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
}
