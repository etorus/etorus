import PushNotification from 'react-native-push-notification'
import { PushNotificationIOS } from 'react-native'

export default () =>
  PushNotification.configure({
    onNotification(notification) {
      console.log( 'NOTIFICATION:', notification )
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },
  })
