import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'

import style from './style'

class FBSignup extends PureComponent {
  render() {
    const { intl, onPress } = this.props

    return (
      <TouchableOpacity style={style.secondary} onPress={onPress}>
        <Text style={style.textSecondary}>
          { intl.formatMessage({ id: 'login.splash.facebook' }).toUpperCase() }
        </Text>
      </TouchableOpacity>
    )
  }
}

export default FBSignup
