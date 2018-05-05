import React, { PureComponent } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import style from './style'

class Session extends PureComponent {
  render() {
    const {
      session,
      calling,
      navigation: {
        state: {
          params: {
            sessionId,
          },
        },
      },
    } = this.props

    return (
      <View style={style.session}>
        <View>
          <Text>Session { sessionId }</Text>
        </View>
      </View>
    )
  }
}

export default Session
