import React from 'react'
import {
  Text,
  TouchableHighlight,
} from 'react-native'

import style from './style'

const AlreadyRegisterButton = ({ intl, onPress }) =>
  <TouchableHighlight style={style.secondary} onPress={onPress}>
    <Text style={style.textSecondary}>
      { intl.formatMessage({ id: 'login.splash.already_have_account' }).toUpperCase() }
    </Text>
  </TouchableHighlight>

export default AlreadyRegisterButton
