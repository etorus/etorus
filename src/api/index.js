import meditations from './meditations'
import auth from './auth'
import createHelpers from './lib/createHelpers'
import createMatcher from './lib/createMatcher'
import request from './lib/request'

const api = {
  auth,
  meditations,
  createMatcher,
}

Object.keys(api).forEach((modelName) => {
  const model = api[modelName]

  Object.keys(model).forEach((callName) => {
    const apiCall = model[callName]

    model[callName] = {
      ...createHelpers(apiCall.key),
      ...apiCall,
    }
  })
})

export { default as reducer } from './redux/reducer'
export { default as saga } from './redux/saga'

export default { ...api, request }
