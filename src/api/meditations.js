import { apiCalls } from './redux/constants';

export default {
  load: {
    key: apiCalls.MEDITATIONS_LOAD,
    opts: () => ({
      path: '/meditations',
      auth: true,
    }),
  },
}
