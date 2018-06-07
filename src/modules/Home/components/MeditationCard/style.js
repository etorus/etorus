import { StyleSheet, Dimensions, Image } from 'react-native'

export default StyleSheet.create({
  cardShadow: {
    height: 114,
    width: Dimensions.get('screen').width - 22,
    borderRadius: 4,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { height: 0, width: 0 },
    marginLeft: 11,
    marginBottom: 11,
    marginRight: 11,
  },

  card: {
    overflow: 'hidden',
    height: 114,
    width: Dimensions.get('screen').width - 22,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: 95,
  },

  background: {
    position: 'absolute',
    top: 0,
    left: -15,
    height: 114,
    width: 112.5,
    resizeMode: Image.resizeMode.contain,
  },

  owner: {
    color: 'rgba(120, 120, 120, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 9,
    marginTop: 12,
  },

  title: {
    color: '#f09526',
    fontFamily: 'Branding',
    fontWeight: '700',
    fontSize: 15,
    marginTop: 5,
  },

  participants: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },

  participantsText: {
    color: '#c64d96',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 10,
    marginRight: 8,
  },

  progressBarText: {
    color: 'rgba(255, 255, 255, 1)',
  },
})