import React, { PureComponent } from 'react'
import {
  View,
  Text,
} from 'react-native'

import style from './style'

class Extra extends PureComponent {
  render() {
    return (
      <View style={style.extra}>
        <Text style={style.extraTitle}>
          Descrição
        </Text>

        <Text style={style.description}>
          Sala iniciada em 18/01/2018 às 20:00h
        </Text>

        <Text style={style.extraTitle}>
          Participando
        </Text>
      </View>
    )
  }
}

export default Extra
