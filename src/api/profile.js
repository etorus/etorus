import { apiCalls } from './redux/constants';

export default {
  load: {
    key: apiCalls.PROFILE_LOAD,
    opts: () => ({
      path: '/users/profile',
      auth: true,
    }),
  },
  update: {
    key: apiCalls.PROFILE_UPDATE,
    opts: body => ({
      path: '/users/current_user',
      method: 'PUT',
      auth: true,
      body,
    }),
  },
}
