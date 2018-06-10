import { combineReducers } from 'redux'
import uploader from './redux/uploader/reducer'

export const reducer = combineReducers({
  uploader,
})

export { default as Loading } from './components/Loading'
export { default as ProgressBar } from './components/ProgressBar'
export { default as Participants } from './components/Participants'
export { default as Uploader } from './containers/Uploader'
