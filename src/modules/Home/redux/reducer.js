import api from 'api'
import reduce from 'store/reduceReducers'

const includedUserData = (collection, included) => collection.map(item => (
  {
    ...item,
    user: included.find(
      user => user.id === item.relationships.user.data.id
    ),
  }
))

const onSuccess = ({ data, included }) => includedUserData(
  data,
  included,
)

export default (state = [], action) => reduce(
  [
    api.meditations.load.onSuccess(onSuccess),
  ],
  state,
  action,
)