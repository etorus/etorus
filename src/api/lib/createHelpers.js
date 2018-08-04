import createActions from './createActions'
import createReducers from './createReducers'
import createSelectors from './createSelectors'

export default key => ({
  ...createActions(key),
  ...createReducers(key),
  ...createSelectors(key),
})
