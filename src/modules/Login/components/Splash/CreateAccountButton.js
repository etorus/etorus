import React from 'react'
import {
  Text,
  TouchableHighlight,
} from 'react-native'

import style from './style'

const CreateAccountButton = ({ intl, onPress }) =>
  <TouchableHighlight style={style.primary} onPress={onPress}>
    <Text style={style.textPrimary}>
      { intl.formatMessage({ id: 'login.splash.start_now' }).toUpperCase() }
    </Text>
  </TouchableHighlight>

export default CreateAccountButton
