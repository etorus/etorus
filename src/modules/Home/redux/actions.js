import { AsyncStorage } from 'react-native'

import * as constants from './constants'
import { index as meditationIndex } from 'requests/meditation'
import { index as notificationIndex} from 'requests/notification'

const includedUserData = (collection, included) => collection.map(item => (
  {
    ...item,
    user: included.find(
      user => user.id === item.relationships.user.data.id
    ),
  }
))

export const meditationCalling = () =>
  ({ type: constants.MEDITATION_CALLING })

export const meditationReceive = () =>
  ({ type: constants.MEDITATION_RECEIVE })

export const meditationSuccess = ({ meditations }) =>
  ({ type: constants.MEDITATION_SUCCESS, meditations })

export const meditationError = ({ error, message }) =>
  ({ type: constants.MEDITATION_ERROR, error, message })

export const notificationCalling = () =>
  ({ type: constants.NOTIFICATIONS_CALLING })

export const notificationReceive = () =>
  ({ type: constants.NOTIFICATIONS_RECEIVE })

export const notificationSuccess = ({ notifications }) =>
  ({ type: constants.NOTIFICATIONS_SUCCESS, notifications })

export const notificationError = ({ error, message }) =>
  ({ type: constants.NOTIFICATIONS_ERROR, error, message })

export const openNotifications = () =>
  ({ type: constants.OPEN_NOTIFICATIONS })

export const closeNotifications = () =>
  ({ type: constants.CLOSE_NOTIFICATIONS })

export const openMenu = () =>
  ({ type: constants.OPEN_MENU })

export const closeMenu = () =>
  ({ type: constants.CLOSE_MENU })

export const filterStarted = () =>
  ({ type: constants.FILTER_STARTED })

export const filterNext = () =>
  ({ type: constants.FILTER_NEXT })

export const fetchMeditations = ({ navigation }) =>
  dispatch => {
    dispatch(meditationCalling())

    return meditationIndex({ navigation })
      .then(
        ({ message, data: meditations, included }) => {
          dispatch(meditationReceive())

          const meditationsUsers = includedUserData(meditations, included)

          if (message) {
            return dispatch(meditationError({ error: 1, message }))
          }

          dispatch(meditationError({ error: 0, message: '' }))
          return dispatch(meditationSuccess({ meditations: meditationsUsers }))
        },
        error => dispatch(meditationError({ error: 2, message: error }))
      ).catch(
        message => meditationError({ message, error: 3 })
      )
  }

export const fetchMyNotifications = ({ navigation }) =>
  dispatch => {
    dispatch(notificationCalling())

    return notificationIndex({ navigation })
      .then(
        ({ message, data: notifications, included }) => {
          dispatch(notificationReceive())

          const notificationsUsers = includedUserData(notifications, included)

          if (message) {
            return dispatch(notificationError({ error: 1, message }))
          }

          dispatch(notificationError({ error: 0, message: '' }))
          return dispatch(notificationSuccess({ notifications: notificationsUsers }))
        },
        error => dispatch(notificationError({ error: 2, message: error }))
      ).catch(
        message => notificationError({ message, error: 3 })
      )
  }
