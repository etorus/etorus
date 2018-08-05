import { apiStatuses, actions } from '../redux/constants'

const capitalizeEventName = status => 
  `on${status.charAt(0).toUpperCase()}${status.slice(1).toLowerCase()}`

export const createReducer = matchAction =>
  (callback, initialState = {}) => (
    state = initialState,
    {
      type,
      payload: { 
        key,
        status,
        payload,
        requestArgs,
      } = {}
    }
  ) => {
    switch (type) {
      case actions.API_STATUS_CHANGE:
        return matchAction(key, status)
          ? callback(payload, state, requestArgs)
          : state

      default:
        return state
    }
  }

export default key => Object.keys(apiStatuses).reduce((reducers, status) => {
  const eventName = status === apiStatuses.NOT_STARTED
    ? 'onReset'
    : capitalizeEventName(status)

  return {
    ...reducers,
    [eventName]: createReducer((k, st) => k === key && st === status),
  }
}, {})
