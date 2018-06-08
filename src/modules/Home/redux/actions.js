import { AsyncStorage } from 'react-native'

import * as constants from './constants'
import { index } from 'requests/meditation'

export const meditationCalling = () =>
  ({ type: constants.MEDITATION_CALLING })

export const meditationReceive = () =>
  ({ type: constants.MEDITATION_RECEIVE })

export const meditationSuccess = ({ meditations }) =>
  ({ type: constants.MEDITATION_SUCCESS, meditations })

export const meditationError = ({ error, message }) =>
  ({ type: constants.MEDITATION_ERROR, error, message })

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

export const fetch = ({ navigation }) =>
  dispatch => {
    dispatch(meditationCalling())

    return index({ navigation })
      .then(
        ({ message, data: meditations, included }) => {
          dispatch(meditationReceive())

          const meditationsUsers = meditations.map(meditation => (
            {
              ...meditation,
              user: included.find(
                user => user.id === meditation.relationships.user.data.id
              ),
            }
          ))

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
