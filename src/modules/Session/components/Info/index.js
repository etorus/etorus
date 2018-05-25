import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

import style from './style'

import play from 'images/play.png'

class Info extends PureComponent {
  render() {
    const {
      owner,
      title,
      audio,
      formatMessage,
    } = this.props

    return (
      <View style={style.info}>
        <Text style={style.owner}>
          { formatMessage({ id: 'session.info.session_of' }) } { owner }
        </Text>

        <Text style={style.title}>
          { title }
        </Text>

        <View style={style.audioArea}>
          <Image source={play} style={style.audioIcon} />
          <Text style={style.audio}>
            { audio }
          </Text>
        </View>
      </View>
    )
  }
}

export default Info
