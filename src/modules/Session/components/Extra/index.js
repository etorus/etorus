import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'

import { Participants } from 'modules/Shared'

import style from './style'

class Extra extends PureComponent {
  render() {
    const {
      start,
      participants,
      formatMessage,
    } = this.props

    return (
      <View style={style.extra}>

        <Text style={style.extraTitle}>
          { formatMessage({ id: 'session.extra.participating' }) }
        </Text>

        <Participants participants={participants} style={style} />

      </View>
    )
  }
}

export default Extra
