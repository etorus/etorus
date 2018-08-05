const initial = {
  attributes: {
    name: '',
    avatar: '',
  },
}

import api from 'api'
import reduce from 'store/reduceReducers'

const onSuccess = ({ data }) => ({
  ...data
})

export default (state = initial, action) => reduce(
  [
    api.profile.load.onSuccess(onSuccess),
  ],
  state,
  action,
)