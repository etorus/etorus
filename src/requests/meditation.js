import { authRequest } from './base'

export const index = ({ navigation }) => authRequest({
  path: '/meditations',
  options: {
    method: 'GET',
  },
  navigation,
})

export const show = ({ id, navigation }) => authRequest({
  path: `/meditations/${id}`,
  options: {
    method: 'GET',
  },
  navigation,
})

export const leave = ({ id, navigation }) => authRequest({
  path: `/meditations/${id}/leave`,
  options: {
    method: 'GET',
  },
  navigation,
})

export const enter = ({ id, navigation }) => authRequest({
  path: `/meditations/${id}/enter`,
  options: {
    method: 'GET',
  },
  navigation,
})