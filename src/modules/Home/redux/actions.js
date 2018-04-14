import {
  MEDITATIONS_CALLING,
  MEDITATIONS_RECEIVE,
  MEDITATIONS_SUCCESS,
  MEDITATIONS_ERROR,
  OPEN_NOTIFICATIONS,
  CLOSE_NOTIFICATIONS
  FILTER_STARTED,
  FILTER_NEXT,
  OPEN_MENU,
  CLOSE_MENU,
} from './constants'

import { meditationsIndex } from 'requests'

export const meditationCalling = () =>
  ({ type: MEDITATION_CALLING })

export const meditationReceive = () =>
  ({ type: MEDITATION_RECEIVE })

export const meditationSuccess = ({ meditations }) =>
  ({ type: MEDITATION_SUCCESS, meditations })

export const meditationError = ({ error, message }) =>
  ({ type: MEDITATION_ERROR, error, message })

export const openNotifications = () =>
  ({ type: OPEN_NOTIFICATIONS })

export const closeNotifications = () =>
  ({ type: CLOSE_NOTIFICATIONS })

export const openMenu = () =>
  ({ type: OPEN_MENU })

export const closeMenu = () =>
  ({ type: CLOSE_MENU })

export const filterStarted = () =>
  ({ type: FILTER_STARTED })

export const filterNext = () =>
  ({ type: FILTER_NEXT })

export const fetch = () =>
  dispatch => {
    dispatch(meditationCalling())

    meditationsIndex()
      .then(response => response.json())
      .then(
        ({ message, data: meditations }) => {
          dispatch(meditationReceive())

          if (message) {
            return dispatch(meditationError({ error: 1, message }))
          }

          dispatch(meditationError({ error: 0, message: '' }))
          return dispatch(meditationSuccess({ meditations }))
        },
        error => dispatch(meditationError({ error: 2, message: error }))
      ).catch(
        error => dispatch(meditationError({ error: 3, message: error }))
      )
  }
