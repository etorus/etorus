import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'

export default StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: 90,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },

  background: {
    width: Dimensions.get('screen').width,
    height: 90,
  },

  wrapper: {
    height: 60,
    padding: 15,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  brand: {
    height: 30,
    width: 113,
    resizeMode: Image.resizeMode.contain,
  },

  menuWrapper: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    flexDirection: 'row',
  },

  notification: {
    height: 30,
    width: 21,
    marginRight: 15,
  },

  notificationIcon: {
    height: 23,
    width: 21,
    marginTop: 2,
    resizeMode: Image.resizeMode.contain,
  },

  menu: {
    height: 30,
    width: 24,
  },

  menuIcon: {
    height: 19.5,
    width: 24,
    marginTop: 4,
    resizeMode: Image.resizeMode.contain,
  },
})
