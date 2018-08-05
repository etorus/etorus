import { apiCalls } from './redux/constants'

export default {
  load: {
    key: apiCalls.NOTIFICATIONS_LOAD,
    opts: () => ({
      path: '/notifications',
      auth: true,
    })
  },
  create: {
    key: apiCalls.NOTIFICATIONS_CREATE,
    opts: body => ({
      path: '/notifications',
      method: 'POST',
      auth: true,
      body,
    })
  }
}