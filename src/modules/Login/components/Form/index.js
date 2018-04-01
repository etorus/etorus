import React from 'react'
import { Link } from 'react-router-native'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native'

import style from './style'
import background from '../../../../assets/images/background_gradient.png'
import logo from '../../../../assets/images/logo_horizontal_white.png'

const Form = ({ intl }) =>
  <View style={style.container}>
    <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />
    <Image source={logo} style={style.brand} />

    <TextInput
      autoCapitalize="none"
      keyboardType="email-address"
      style={style.input}
      placeholder={intl.formatMessage({ id: 'login.form.placeholder_email' })}
      underlineColorAndroid="transparent"
    />

    <TextInput
      autoCapitalize="none"
      secureTextEntry
      style={style.input}
      placeholder={intl.formatMessage({ id: 'login.form.placeholder_password' })}
      underlineColorAndroid="transparent"
    />

    <Link to="/password-recovery">
      <Text style={style.forgetPassword}>
        {intl.formatMessage({ id: 'login.form.forget_my_password' })}
      </Text>
    </Link>

    <TouchableHighlight style={style.accessButton}>
      <Text style={style.accessText}>
        { intl.formatMessage({ id: 'login.form.access' }).toUpperCase() }
      </Text>
    </TouchableHighlight>
  </View>

export default Form
