import React, { PureComponent } from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import style from './style'
import background from 'images/background_login.png'
import logo from 'images/complete_logo_white.png'

import AlreadyRegisterButton from './AlreadyRegisterButton'
import CreateAccountButton from './CreateAccountButton'

class Splash extends PureComponent {
  render() {
    const {
      intl,
      goSignup,
      goLogin,
    } = this.props

    return (
      <View style={style.container}>
        <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />

        <View stye={style.imageContainer}>
          <Image source={logo} style={style.brand} />
        </View>

        <Text style={style.text}>
          { intl.formatMessage({ id: 'login.splash.initial_message' }) }
        </Text>

        <View style={style.buttons}>
          <CreateAccountButton intl={intl} onPress={goSignup} />

          <Text style={style.textBetween}>
            { intl.formatMessage({ id: 'login.splash.or' }) }
          </Text>

          <AlreadyRegisterButton intl={intl} onPress={goLogin} />
        </View>
      </View>
    )
  }
}

export default Splash
