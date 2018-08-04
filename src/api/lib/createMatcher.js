import { actions } from '../redux/constants'

export default (keys, statuses) => {
  const normalizedKeys = keys.map(key => typeof key === 'string' ? key : key.key)

  return ({ type, payload: { key = '', status = '' } = {}}) => {
    if (type !== actions.API_STATUS_CHANGE) return false
    return normalizedKeys.includes(key) && statuses.includes(status)
  }
}
