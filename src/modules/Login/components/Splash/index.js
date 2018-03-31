import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

import style from './style'
import background from '../../../../assets/images/background_login.png'
import logo from '../../../../assets/images/complete_logo_white.png'

const Splash = ({ intl }) =>
  <View style={style.container}>
    <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />

    <View stye={style.imageContainer}>
      <Image source={logo} style={style.brand} />
    </View>

    <Text style={style.text}>
      { intl.formatMessage({ id: 'splash.initial_message' }) }
    </Text>

    <View style={style.buttons}>
      <TouchableHighlight style={style.primary}>
        <Text style={style.textPrimary}>
          { intl.formatMessage({ id: 'splash.start_now' }).toUpperCase() }
        </Text>
      </TouchableHighlight>

      <Text style={style.textBetween}>
        { intl.formatMessage({ id: 'splash.or' }) }
      </Text>

      <TouchableHighlight style={style.secondary}>
        <Text style={style.textSecondary}>
          { intl.formatMessage({ id: 'splash.already_have_account' }).toUpperCase() }
        </Text>
      </TouchableHighlight>
    </View>
  </View>

export default Splash
