import { combineReducers } from 'redux'
import uploader from './redux/uploader/reducer'

export const reducer = combineReducers({
  uploader,
})

export { default as Input } from './components/Input'
export { default as InputDate } from './components/Input/date'
export { default as Loading } from './components/Loading'
export { default as ProgressBar } from './components/ProgressBar'
export { default as Participants } from './components/Participants'
export { default as LoadingButton } from './components/LoadingButton'

export { default as Uploader } from './containers/Uploader'
