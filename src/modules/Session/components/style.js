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
    top: 45,
    left: 20,
    width: 13.5,
    height: 24,
    zIndex: 1,
  },

  arrowBackImage: {
    width: 13.5,
    height: 24,
    resizeMode: Image.resizeMode.contain,
  },
})
