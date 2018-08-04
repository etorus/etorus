import { apiCalls } from './redux/constants';

export default {
  load: {
    key: apiCalls.MEDITATIONS_LOAD,
    opts: () => ({
      path: '/meditaions',
      method: 'GET',
      auth: true,
    }),
  },
}
