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
    } = this.props

    return (
      <View style={style.extra}>
        <Text style={style.extraTitle}>
          Descrição
        </Text>

        <Text style={style.description}>
          Sala iniciada em { moment(start).calendar() }
        </Text>

        <Text style={style.extraTitle}>
          Participando
        </Text>

        <Participants participants={participants} style={style} />
      </View>
    )
  }
}

export default Extra
