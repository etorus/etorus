import {
  StyleSheet,
  Image,
} from 'react-native'

export default StyleSheet.create({
  info: {
    alignItems: 'center',
    marginTop: 37,
  },

  owner: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 13,
  },

  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 19,
    marginTop: 5,
  },

  audioArea: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  audio: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 11,
    marginLeft: 5,
  },

  audioIcon: {
    height: 14,
    width: 14,
    resizeMode: Image.resizeMode.contain,
  },
})
