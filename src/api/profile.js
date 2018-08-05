import { apiCalls } from './redux/constants';

export default {
  load: {
    key: apiCalls.PROFILE_LOAD,
    opts: () => ({
      path: '/users/profile',
      auth: true,
    }),
  },
}
