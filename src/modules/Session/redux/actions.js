import * as constants from './constants'
import { show, leave, enter } from 'requests/meditation'

export const sessionCalling = () =>
  ({ type: constants.SESSION_CALLING })

export const sessionReceive = () =>
  ({ type: constants.SESSION_RECEIVE })

export const sessionSuccess = ({ meditation }) =>
  ({ type: constants.SESSION_SUCCESS, meditation })

export const sessionError = ({ error, message }) =>
  ({ type: constants.SESSION_ERROR, error, message })

export const fetch = ({ navigation, id }) =>
  dispatch => {
    dispatch(sessionCalling())

    return show({ navigation, id })
      .then(
        ({ message, data: meditation, included }) => {
          dispatch(sessionReceive())

          if (message) {
            return dispatch(sessionError({ error: 1, message }))
          }

          meditation.user = included[0]

          dispatch(sessionError({ error: 0, message: '' }))
          return dispatch(sessionSuccess({ meditation }))
        },
        error => dispatch(sessionError({ error: 2, message: error }))
      ).catch(
        message => sessionError({ message, error: 3 })
      )
  }

export const leaveLobby = ({ id, navigation }) =>
  dispatch =>
    leave({ id, navigation })

export const enterLobby = ({ id, navigation }) =>
  dispatch =>
    enter({ id, navigation })
