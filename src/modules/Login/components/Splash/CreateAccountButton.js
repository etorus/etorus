import React, { PureComponent } from 'react'
import {
  Text,
  TouchableHighlight,
} from 'react-native'

import style from './style'

class CreateAccountButton extends PureComponent {
  render() {
    const { intl, onPress } = this.props

    return (
      <TouchableHighlight style={style.primary} onPress={onPress}>
        <Text style={style.textPrimary}>
          { intl.formatMessage({ id: 'login.splash.start_now' }).toUpperCase() }
        </Text>
      </TouchableHighlight>
    )
  }
}

export default CreateAccountButton
