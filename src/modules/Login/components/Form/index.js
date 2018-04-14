import React, { PureComponent } from 'react'
import { Link } from 'react-router-native'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native'

import FacebookLogin from './FacebookLogin'
import GoogleLogin from './GoogleLogin'

import style from './style'
import logo from 'images/logo_horizontal_white.png'

class Form extends PureComponent {
  render() {
    const {
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
    } = this.props

    return (
      <View style={style.container}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#b834bc', '#fdaa04']}
          start={{ x: 0.5, y: 0.1 }} end={{ x: 0.8, y: 1.0 }}
        />

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
            { intl.formatMessage({ id: 'login.form.social_access' }) }
          </Text>

          <View style={style.buttons}>
            <GoogleLogin intl={intl} />
            <FacebookLogin loginFacebook={pressFacebook} intl={intl} />
          </View>
        </View>
      </View>
    )
  }
}

export default Form
