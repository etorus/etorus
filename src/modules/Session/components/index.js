import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import Extra from './Extra'
import Header from './Header'
import Info from './Info'
import ProgressArea from './ProgressArea'

import style from './style'

class Session extends PureComponent {
  render() {
    const {
      currentTime,
      progressPercent,
      meditation: {
        attributes: {
          title,
          audio,
        },

        user: {
          attributes: {
            name: owner,
          },
        },
      }
    } = this.props

    return (
      <View style={style.session}>
        <Header />

        <View style={style.wrapper}>
          <Info
            owner={owner}
            title={title}
            audio={audio}
          />

          <ProgressArea label={currentTime} progressPercent={progressPercent} />

          <Extra />
        </View>
      </View>
    )
  }
}

export default Session
