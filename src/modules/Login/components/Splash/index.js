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
import FBSignup from './FBSignup'

class Splash extends PureComponent {
  render() {
    const {
      intl,
      goSignup,
      goLogin,
      goSignupFB,
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
          <AlreadyRegisterButton intl={intl} onPress={goLogin} />
          <FBSignup intl={intl} onPress={goSignupFB} />
        </View>
      </View>
    )
  }
}

export default Splash
