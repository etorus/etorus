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
    resizeMode: Image.resizeMode.contain,
  },

  inputs: {
    marginTop: 10,
    alignItems: 'center',
  },

  saveButton: {
    backgroundColor: 'rgba(255, 255, 255, .0)',
    paddingVertical: 15,
    width: 310,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
  },

  saveText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontFamily: 'Branding',
    fontWeight: '400',
  },

  goBack: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 10,
  },
})
