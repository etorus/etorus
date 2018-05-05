import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'

export default StyleSheet.create({
  progressArea: {
    marginTop: 85,
    alignItems: 'center',
  },

  sessionTimeLabel: {
    color: 'rgba(62, 62, 62, 1)',
    fontFamily: 'Branding',
    fontWeight: '400',
    fontSize: 8,
    marginBottom: 8,
  },

  progressBar: {
    width: Dimensions.get('screen').width - 30,
    height: 24,
    borderRadius: 12,
  },

  progressBarGradient: {
    // TODO: Get the time of the session and use to set the width
    width: (Dimensions.get('screen').width - 30) * 0.70,
    height: 24,
    borderRadius: 12,
  },

  progressBarText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontWeight: '900',
  },
})
