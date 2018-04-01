import React from 'react'
import { Link } from 'react-router-native'

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import style from './style'
import background from '../../../../assets/images/background_login.png'
import logo from '../../../../assets/images/complete_logo_white.png'

import AlreadyRegisterButton from './AlreadyRegisterButton'
import CreateAccountButton from './CreateAccountButton'

const Splash = ({ intl }) =>
  <View style={style.container}>
    <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />

    <View stye={style.imageContainer}>
      <Image source={logo} style={style.brand} />
    </View>

    <Text style={style.text}>
      { intl.formatMessage({ id: 'login.splash.initial_message' }) }
    </Text>

    <View style={style.buttons}>
      <Link
        to='/signup'
        intl={intl}
        component={CreateAccountButton}
      />

      <Text style={style.textBetween}>
        { intl.formatMessage({ id: 'login.splash.or' }) }
      </Text>

      <Link
        to='/login'
        intl={intl}
        component={AlreadyRegisterButton}
      />
    </View>
  </View>

export default Splash
