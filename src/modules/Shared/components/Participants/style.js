import { StyleSheet, Image, } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  more: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginLeft: 2,
  },

  moreWrapper: {
    margin: 1.5,
    height: 17,
    width: 17,
    borderRadius: 7.5,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  moreText: {
    color: '#f09526',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 8,
  },

  participant: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    resizeMode: Image.resizeMode.contain,
  },
})
