import { actions } from './constants'

export default (key, status, payload = {}, requestArgs = []) => ({
  type: actions.API_STATUS_CHANGE,
  payload: { 
    key,
    status,
    payload,
    requestArgs,
  }
})
