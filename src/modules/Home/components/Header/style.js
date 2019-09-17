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
  },

  menuWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 15,
    flexDirection: 'row',
  },

  notification: {
    height: 40,
    width: 50,
  },

  notificationIcon: {
    height: 23,
    width: 21,
    marginTop: 2,
  },

  menu: {
    height: 40,
    width: 50,
  },

  menuIcon: {
    height: 20,
    width: 24,
    marginVertical: 12,
    marginHorizontal: 10,
  },
})
