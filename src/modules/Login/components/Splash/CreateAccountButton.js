import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'

import style from './style'

class CreateAccountButton extends PureComponent {
  render() {
    const { intl, onPress } = this.props

    return (
      <TouchableOpacity style={style.primary} onPress={onPress}>
        <Text style={style.textPrimary}>
          { intl.formatMessage({ id: 'login.splash.start_now' }).toUpperCase() }
        </Text>
      </TouchableOpacity>
    )
  }
}

export default CreateAccountButton
