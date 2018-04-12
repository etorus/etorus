import {
  StyleSheet,
  Image,
} from 'react-native'

export default StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 10,
    width: 140,
    borderRadius: 30,
    marginRight: 20,
  },

  wrapper: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection:'row',
  },

  google: {
    marginRight: 18,
    marginLeft: 10,
    width: 27,
    height: 27,
    resizeMode: Image.resizeMode.contain,
  },

  text: {
    color: 'rgba(205, 86, 66, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 13,
  },
})
