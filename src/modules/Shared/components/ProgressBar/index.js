import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
} from 'react-native'

import style from './style'

class ProgressBar extends PureComponent {
  render() {
    const {
      style: {
        progressBar,
        progressBarGradient,
        progressBarText,
      },
      label,
    } = this.props

    return (
      <View style={[ style.progressBar, progressBar ]}>
        <LinearGradient
          style={[ style.progressBarGradient, progressBarGradient ]}
          colors={['#f09526', '#c64d96']}
          start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
        >
          <Text style={[ style.progressBarText, progressBarText ]}>
            { label }
          </Text>
        </LinearGradient>
      </View>
    )
  }
}

export default ProgressBar
