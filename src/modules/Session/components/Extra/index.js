import React, { PureComponent } from 'react'
import moment from 'moment'
import 'moment/locale/pt'

import {
  View,
  Text,
} from 'react-native'

import { Participants } from 'modules/Shared'

import style from './style'

moment.locale('pt-BR')

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
          { formatMessage({ id: 'session.extra.description' }) }
        </Text>

        <Text style={style.description}>
          { formatMessage({ id: 'session.extra.session_time' }) }
          { ' ' }
          { moment(start).calendar() }
        </Text>

        <Text style={style.extraTitle}>
          { formatMessage({ id: 'session.extra.participating' }) }
        </Text>

        <Participants participants={participants} style={style} showMore quantity="+50"/>
      </View>
    )
  }
}

export default Extra
