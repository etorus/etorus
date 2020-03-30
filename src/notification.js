import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from "@react-native-community/push-notification-ios"

export default () =>
  PushNotification.configure({
    onNotification(notification) {
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },
  })
