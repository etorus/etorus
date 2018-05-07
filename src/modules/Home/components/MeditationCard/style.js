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

  participant: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginHorizontal: 2,
    resizeMode: Image.resizeMode.contain,
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
    fontSize: 6,
  },

  progressBar: {
    marginTop: 10,
    width: Dimensions.get('screen').width - 130,
    height: 14,
    borderRadius: 7,
  },

  progressBarGradient: {
    // TODO: Get the time of the session and use to set the width
    width: (Dimensions.get('screen').width - 130) * 0.50,
    height: 14,
    borderRadius: 7,
  },

  progressBarText: {
    color: 'rgba(255, 255, 255, 1)',
  },
})
