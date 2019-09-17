import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
  },

  background: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },

  brand: {
    marginTop: 40,
    width: 170,
    height: 44,
  },

  inputs: {
    marginTop: 10,
    alignItems: 'center',
  },

  goBack: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 10,
  },
})
