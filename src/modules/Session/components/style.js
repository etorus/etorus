import { StyleSheet } from 'react-native'

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
  },

  swipperDot: {
    backgroundColor: '#A9A5A5',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    borderWidth: .5,
    borderColor: '#000',
  },

  swipperActiveDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: .5,
    borderColor: '#fff',
  },

  swipperPaginationStyle: {
    bottom: 390,
    left: 0,
    right: 0,
  },

  swipper: {
    marginTop: 40,
    height: 300,
    paddingBottom: 40,
    backgroundColor: '#eff0f0',
  }
})
