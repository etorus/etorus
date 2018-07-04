import { StyleSheet, Image } from 'react-native'

export default StyleSheet.create({
  session: {
    flex: 1,
    backgroundColor: '#eff0f0',
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  arrowBack: {
    top: 56,
    left: 10,
    width: 40,
    height: 40,
    zIndex: 1,
  },

  arrowBackImage: {
    width: 14,
    height: 24,
    marginVertical: 8,
    marginHorizontal: 13,
    resizeMode: Image.resizeMode.contain,
  },

  notification: {
    position: 'absolute',
    top: 55,
    right: 20,
    height: 41,
    width: 41,
    zIndex: 1,
  },

  notificationIcon: {
    height: 23,
    width: 21,
    marginVertical: 9,
    marginHorizontal: 10,
    resizeMode: Image.resizeMode.contain,
  },
})
