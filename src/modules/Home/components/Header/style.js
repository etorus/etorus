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
  },

  brandContainer: {
    height: 30,
  },

  brand: {
    height: 30,
    width: 113,
    resizeMode: Image.resizeMode.contain,
  },
})
