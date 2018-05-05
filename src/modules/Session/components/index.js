import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import Sound from 'react-native-sound'

import Extra from './Extra'
import Header from './Header'
import Info from './Info'
import ProgressArea from './ProgressArea'

import style from './style'

class Session extends PureComponent {
  render() {
    return (
      <View style={style.session}>
        <Header />

        <View style={style.wrapper}>
          <Info
            owner="Vinícius Palma"
            title="Meditação coletiva de Santos"
            audio="Meditation for life"
          />

          <ProgressArea label="25min" />

          <Extra />
        </View>
      </View>
    )
  }
}

export default Session
