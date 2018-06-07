import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'

import { ProgressBar } from 'modules/Shared'

const createStyle = percent =>
  StyleSheet.create({
    progressArea: {
      marginTop: 285,
      alignItems: 'center',
    },

    sessionTimeLabel: {
      color: 'rgba(62, 62, 62, 1)',
      fontFamily: 'Branding',
      fontWeight: '400',
      fontSize: 12,
      marginBottom: 8,
    },

    progressBar: {
      width: Dimensions.get('screen').width - 30,
      height: 24,
      borderRadius: 12,
    },

    progressBarGradient: {
      width: (Dimensions.get('screen').width - 30) * percent,
      height: 24,
      borderRadius: 12,
    },

    progressBarText: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 12,
      fontWeight: '900',
    },
  })


import play from 'images/play.png'

class ProgressArea extends PureComponent {
  render() {
    const {
      label,
      progressPercent,
      formatMessage,
    } = this.props

    const style = createStyle(progressPercent)

    return (
      <View style={style.progressArea}>
        <Text style={style.sessionTimeLabel}>
          { formatMessage({ id: 'session.progress_bar.session_time' }).toUpperCase() }
        </Text>

        <ProgressBar style={style} label={label} />
      </View>
    )
  }
}

export default ProgressArea
