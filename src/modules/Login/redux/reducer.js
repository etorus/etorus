import api from 'api'
import reduce from 'store/reduceReducers'

const initial = {
  calling: false,
  authToken: null,
}

const onSuccess = ({ auth_token: authToken }) => ({ 
  authToken,
  calling: false,
})

const onStarted = () => ({
  calling: true,
})

const reducers = [
  api.auth.login.onStarted(onStarted),
  api.auth.login.onSuccess(onSuccess),
]

export default (state = initial, action) => reduce(
  reducers,
  state,
  action,
)