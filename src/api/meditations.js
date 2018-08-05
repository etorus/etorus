import { apiCalls } from './redux/constants';

export default {
  load: {
    key: apiCalls.MEDITATIONS_LOAD,
    opts: () => ({
      path: '/meditations',
      auth: true,
    }),
  },
  leave: {
    key: apiCalls.MEDITATIONS_LEAVE,
    opts: id => ({
      path: `/meditations/${id}/leave`,
      auth: true,
    }),
  },
  enter: {
    key: apiCalls.MEDITATIONS_ENTER,
    opts: id => ({
      path: `/meditations/${id}/enter`,
      auth: true,
    }),
  },
}
