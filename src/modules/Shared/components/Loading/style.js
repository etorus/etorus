import { StyleSheet, Image } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  brand: {
    height: 145,
    width: 245,
    resizeMode: Image.resizeMode.contain
  },

  version: {
    paddingBottom: 20,
    fontSize: 10,
    fontFamily: 'Branding',
    fontWeight: '400',
  },
})
