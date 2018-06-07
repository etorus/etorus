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
    width: 200,
    height: 51,
    resizeMode: Image.resizeMode.contain,
  },

  inputs: {
    alignItems: 'center',
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 310,
    height: 50,
    borderRadius: 23,
    marginBottom: 15,
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 18,
    paddingHorizontal: 40,
  },

  forgetPassword: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 16,
  },

  withoutAccount: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 16,
    margin: 0,
  },

  accessButton: {
    backgroundColor: 'rgba(255, 255, 255, .0)',
    paddingVertical: 15,
    width: 310,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
  },

  accessText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontFamily: 'Branding',
    fontWeight: '400',
  },

  social: {
    paddingTop: 100,
    paddingBottom: 50,
    alignItems: 'center',
  },

  socialText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
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
