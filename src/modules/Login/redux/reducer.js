import api from 'api'
import reduce from 'store/reduceReducers'

const onSuccess = ({ auth_token: authToken }) => ({ 
  authToken,
})

export default (state = { authToken: null }, action) => reduce(
  [
    api.auth.login.onSuccess(onSuccess),
  ],
  state,
  action,
)