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
    alignItems: 'center',
  },

  wrapper: {
    height: 90,
    width: Dimensions.get('screen').width,
  },

  background: {
    width: Dimensions.get('screen').width,
    height: 90,
    resizeMode: Image.resizeMode.contain,
  },

  brandContainer: {
    flex: 1,
  },

  brand: {
    marginTop: 90,
    height: 30,
    width: 113,
    resizeMode: Image.resizeMode.contain,
  },
})
