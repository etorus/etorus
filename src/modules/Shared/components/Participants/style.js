import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  more: {
    height: 28,
    width: 28,
    borderRadius: 14,
    marginLeft: 4,
  },

  moreWrapper: {
    margin: 1.5,
    height: 25,
    width: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  moreText: {
    color: '#f09526',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 12,
  },

  participant: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginHorizontal: 2,
    marginVertical: 2,
  },
})
