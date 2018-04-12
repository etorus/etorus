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

import FacebookLogin from '../FacebookLogin'
import GoogleLogin from '../GoogleLogin'

import style from './style'
import background from '../../../../assets/images/background_gradient.png'
import logo from '../../../../assets/images/logo_horizontal_white.png'

const Form = ({
  intl,
  inputs: {
    password,
    email,
  },
  authToken,
  error,
  message,
  changeInput,
  pressAccess,
  pressFacebook,
}) =>
  <View style={style.container}>
    <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />
    <Image source={logo} style={style.brand} />

    <View style={style.inputs}>
      <TextInput
        onChangeText={value => changeInput({ name: 'email', value })}
        autoCapitalize="none"
        keyboardType="email-address"
        style={style.input}
        placeholder={intl.formatMessage({ id: 'login.form.placeholder_email' })}
        underlineColorAndroid="transparent"
      />

      <TextInput
        onChangeText={value => changeInput({ name: 'password', value })}
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
    </View>

    <TouchableHighlight
      style={style.accessButton}
      onPress={() => pressAccess({ email, password })}>
      <Text style={style.accessText}>
        { intl.formatMessage({ id: 'login.form.access' }).toUpperCase() }
      </Text>
    </TouchableHighlight>

    <View style={style.social}>
      <Text style={style.socialText}>
        Entrar pelas redes sociais com um toque
      </Text>

      <View style={style.buttons}>
        <GoogleLogin />
        <FacebookLogin loginFacebook={pressFacebook} />
      </View>
    </View>

    <Text>{ error ? `${error} : ${JSON.stringify(message)}` : authToken }</Text>
  </View>

export default Form
