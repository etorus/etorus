import {
  StyleSheet,
} from 'react-native'

export default StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 10,
    width: 140,
    borderRadius: 30,
    marginLeft: 20,
  },

  wrapper: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection:'row',
  },

  facebook: {
    marginRight: 15,
    marginLeft: 10,
    width: 27,
    height: 27,
  },

  text: {
    color: 'rgba(0, 133, 189, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 13,
  },
})
