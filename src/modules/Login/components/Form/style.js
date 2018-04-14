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
  },

  brand: {
    marginTop: 60,
    width: 170,
    height: 44,
    resizeMode: Image.resizeMode.contain,
  },

  inputs: {
    alignItems: 'center',
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
    fontWeight: '400',
  },

  social: {
    paddingTop: 100,
    alignItems: 'center',
  },

  socialText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 13,
    fontFamily: 'Branding',
    fontWeight: '400',
    marginBottom: 10,
  },

  buttons: {
    flexWrap: 'wrap',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
})
