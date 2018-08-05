import PushNotification from 'react-native-push-notification'
import { Alert } from 'react-native'
import uuidv4 from 'uuid/v4'
import moment from 'config/moment'

import { call, takeEvery } from 'redux-saga/effects'

import * as constants from './constants'
import api, { saga as callApi } from 'api'

const create = (formatMessage, success) =>
  Alert.alert(
    formatMessage({ id: 'notifications.alert.title' }),
    formatMessage({ id: 'notifications.alert.body' }),
    [
      {
        text: formatMessage({ id: 'notifications.alert.cancel' }),
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: formatMessage({ id: 'notifications.alert.ok' }),
        onPress: success,
      },
    ],
  )

export function *onCreateNotification({
  meditationStart,
  meditationId,
  formatMessage,
}) {
  const uuid = uuidv4()

  yield call(callApi, api.notifications.create, { meditation_id: meditationId, uuid })

  create(formatMessage, () => {
    PushNotification.localNotificationSchedule({
      message: formatMessage({ id: 'notifications.session.starting' }),
      date: moment(meditationStart).subtract(5, 'minutes').toDate(),
      userInfo: {
        id: uuid,
      },
    })
  })
}

export function *onLeaveLobby({ id }) {
  yield call(callApi, api.meditations.leave, id)
}

export function *onEnterLobby({ id }) {
  yield call(callApi, api.meditations.enter, id)
}

export default function *rootSession() {
  yield takeEvery(constants.CREATE_NOTIFICATION, onCreateNotification)
  yield takeEvery(constants.LEAVE_LOBBY, onLeaveLobby)
  yield takeEvery(constants.ENTER_LOBBY, onEnterLobby)
}
