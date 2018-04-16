import React, { PureComponent } from 'react'
import {
  Text,
  TouchableHighlight,
} from 'react-native'

import style from './style'

class AlreadyRegisterButton extends PureComponent {
  render() {
    const { intl, onPress } = this.props

    return (
      <TouchableHighlight style={style.secondary} onPress={onPress}>
        <Text style={style.textSecondary}>
          { intl.formatMessage({ id: 'login.splash.already_have_account' }).toUpperCase() }
        </Text>
      </TouchableHighlight>
    )
  }
}

export default AlreadyRegisterButton
