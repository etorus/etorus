import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

import { ProgressBar } from 'modules/Shared'

import style from './style'

import play from 'images/play.png'

class ProgressArea extends PureComponent {
  render() {
    const {
      label,
    } = this.props

    return (
      <View style={style.progressArea}>
        <Text style={style.sessionTimeLabel}>
          TEMPO DA SESSÃO
        </Text>

        <ProgressBar style={style} label={label} />
      </View>
    )
  }
}

export default ProgressArea
