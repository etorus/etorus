import auth from './auth'
import profile from './profile'
import meditations from './meditations'
import createHelpers from './lib/createHelpers'
import createMatcher from './lib/createMatcher'
import request from './lib/request'

const api = {
  auth,
  profile,
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

export * from './redux/constants'
export { default as reducer } from './redux/reducer'
export { default as saga } from './redux/saga'


export default { ...api, request }
