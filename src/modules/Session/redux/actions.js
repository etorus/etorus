import PushNotification from 'react-native-push-notification'
import { Alert } from 'react-native'
import uuidv4 from 'uuid/v4'
import moment from 'config/moment'

import * as constants from './constants'

const confirmNotification = (formatMessage, success, fail) =>
  Alert.alert(
    formatMessage({ id: 'notifications.alert.title' }),
    formatMessage({ id: 'notifications.alert.body' }),
    [
      {
        text: formatMessage({ id: 'notifications.alert.cancel' }),
        onPress: fail,
        style: 'cancel',
      },
      {
        text: formatMessage({ id: 'notifications.alert.ok' }),
        onPress: success,
      },
    ],
  )

export const createNotification = ({ meditationId, meditationStart, formatMessage }) => ({
  type: constants.CREATE_NOTIFICATION,
  meditationId,
  meditationStart,
  formatMessage,
})

export const leaveLobby = ({ id }) => ({
  type: constants.LEAVE_LOBBY,
  id,
})

export const enterLobby = ({ id }) => ({
  type: constants.ENTER_LOBBY,
  id,
})
