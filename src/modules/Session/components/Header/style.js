import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'

export default StyleSheet.create({
  background: {
    width: Dimensions.get('screen').width,
    height: 428,
  },

  upperGradient: {
    width: Dimensions.get('screen').width,
    height: 235,
  },

  downGradient: {
    width: Dimensions.get('screen').width,
    height: 150,
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },

  overlay: {
    width: 307.5,
    height: 362,
    top: 32,
    resizeMode: Image.resizeMode.contain,
  },
})
