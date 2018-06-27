import PushNotification from 'react-native-push-notification'
import { Alert } from 'react-native'
import uuidv4 from 'uuid/v4'
import moment from 'app/moment'

import * as constants from './constants'
import { leave, enter } from 'requests/meditation'
import { create } from 'requests/notification'

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

export const notificationCalling = () =>
  ({ type: constants.NOTIFICATION_CALLING })

export const notificationReceive = () =>
  ({ type: constants.NOTIFICATION_RECEIVE })

export const notificationSuccess = () =>
  ({ type: constants.NOTIFICATION_SUCCESS })

export const notificationError = ({ error, message }) =>
  ({ type: constants.NOTIFICATION_ERROR, error, message })

export const createNotification = ({
  navigation,
  meditationId,
  meditationStart,
  formatMessage,
}) =>
  dispatch => {
    dispatch(notificationCalling())

    const uuid = uuidv4()

    const fields = {
      uuid,
      meditation_id: meditationId,
    }

    confirmNotification(
      formatMessage,
      () => {
        create({ navigation, fields })

        PushNotification.localNotificationSchedule({
          message: formatMessage({ id: 'notifications.session.starting' }),
          date: moment(meditationStart).subtract(15, 'minutes').toDate(),
          userInfo: {
            id: uuid,
          },
        });
      },
      () => dispatch(notificationReceive())
    )

    return dispatch(notificationReceive())
  }

export const leaveLobby = ({ id, navigation }) =>
  dispatch =>
    leave({ id, navigation })

export const enterLobby = ({ id, navigation }) =>
  dispatch =>
    enter({ id, navigation })
