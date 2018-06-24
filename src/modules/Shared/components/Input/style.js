import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginBottom: 15,
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 310,
    height: 50,
    borderRadius: 23,
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 18,
    paddingHorizontal: 40,
  },

  error: {
    color: 'rgb(220, 20, 60)',
  },

  textError: {
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 10,
    color: 'rgb(255, 99, 71)',
    position: 'absolute',
    bottom: 0,
    left: 40,
  },
})
