import { apiCalls } from './redux/constants';

export default {
  reset: {
    key: apiCalls.PASSWORD_RESET,
    opts: body => ({
      path: '/passwords/reset',
      method: 'POST',
      body,
    }),
  },
}
