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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  background: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: Image.resizeMode.contain,
  },

  imageContainer: {
    flex: 1,
  },

  brand: {
    marginTop: 90,
    height: 142,
    width: 242,
    resizeMode: Image.resizeMode.contain,
  },

  text: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Branding',
    fontWeight: '400',
    textAlign: 'center',
  },

  buttons: {
    marginBottom: 60,
    alignItems: 'center',
  },

  primary: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 14,
    width: 270,
    alignItems: 'center',
    borderRadius: 30,
  },

  textPrimary: {
    fontSize: 16,
    fontFamily: 'Branding',
    fontWeight: '400',
    color: 'rgba(7, 7, 7, 1)',
  },

  textBetween: {
    marginVertical: 18,
    fontSize: 13,
    color: 'rgba(255, 255, 255, 1)',
  },

  secondary: {
    backgroundColor: 'rgba(255, 255, 255, .0)',
    paddingVertical: 14,
    width: 270,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 1)',
  },

  textSecondary: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontFamily: 'Branding',
    fontWeight: '400',
  },
})
