import { apiStatuses } from '../redux/constants'

const getStatus = ({ api }, key) => 
  ({ ...(api[key] || {}) })

const isNotStarted = (state, key) => 
  getStatus(state, key).status === apiStatuses.NOT_STARTED

const isStarted = (state, key) =>
  getStatus(state, key).status === apiStatuses.STARTED

const isSuccess = (state, key) =>
  getStatus(state, key).status === apiStatuses.SUCCESS

const isFail = (state, key) =>
  getStatus(state, key).status === apiStatuses.FAIL

const isFinished = (state, key) =>
  isSuccess(state, key) || isFail(state, key)

const isNotFinished =(state, key) =>
  !isFinished(state, key)

export default key => ({
  getStatus() {
    return getStatus(state, key)
  },
  isNotStarted() {
    return isNotStarted(state, key)
  },
  isStarted() {
    return isStarted(state, key)
  },
  isSuccess() {
    return isSuccess(state, key)
  },
  isFail() {
    return isFail(state, key)
  },
  isFinished() {
    return isFinished(state, key)
  },
  isNotFinished() {
    return isNotFinished(state, key)
  },
})
