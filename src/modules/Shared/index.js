import { combineReducers } from 'redux'

import uploader from './redux/uploader/reducer'
import uploaderSaga from './redux/uploader/saga'
import forms from './redux/forms/reducer'
import formsActions from './redux/forms/actions'
import formsSelector from './redux/forms/selector'

export { default as Loading } from './components/Loading'
export { default as ProgressBar } from './components/ProgressBar'
export { default as Participants } from './components/Participants'
export { default as LoadingButton } from './components/LoadingButton'

export { default as Uploader } from './containers/Uploader'
export { default as Input } from './containers/Input'

export const selectors = {
  forms: formsSelector,
}

export const actions = {
  forms: formsActions,
}

export const sagas = {
  uploader: uploaderSaga,
}

export const reducer = combineReducers({
  uploader,
  forms,
})
