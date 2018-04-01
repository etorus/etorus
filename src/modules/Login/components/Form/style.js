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
    resizeMode: Image.resizeMode.contain,
  },

  brand: {
    marginTop: 68,
    marginBottom: 40,
    width: 170,
    height: 44,
    resizeMode: Image.resizeMode.contain,
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 310,
    height: 46,
    borderRadius: 23,
    marginBottom: 15,
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 16,
    paddingHorizontal: 40,
  },

  forgetPassword: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 36,
  },

  accessButton: {
    backgroundColor: 'rgba(255, 255, 255, .0)',
    paddingVertical: 13,
    width: 310,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
  },

  accessText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontFamily: 'Branding',
    fontWeight: '500',
  },
})
