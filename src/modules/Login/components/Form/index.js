import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import FacebookLogin from './FacebookLogin'
import { Input, LoadingButton } from 'modules/Shared'

import style from './style'
import fields from './fields'
import logo from 'images/logo_horizontal_white.png'

class Form extends PureComponent {
  render() {
    const {
      calling,
      intl: {
        formatMessage,
      },
      pressAccess,
      pressFacebook,
      goToSignup,
      goToPassword,
    } = this.props

    // const fieldsWithErrors = fields(formatMessage).map(
    //   field => ({ ...field, error: validation[field.name] })
    // )

    return (
      <View style={style.container}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#b834bc', '#fdaa04']}
          start={{ x: 0.5, y: 0.1 }} end={{ x: 0.8, y: 1.0 }}
        />

        <Image source={logo} style={style.brand} />

        <View style={style.inputs}>

          {
            fields(formatMessage).map(
              field => <Input
                {...field}
                key={field.name}
                form='login'
              />
            )
          }

          <TouchableOpacity onPress={goToPassword}>
            <Text style={style.forgetPassword}>
              { formatMessage({ id: 'login.form.forget_my_password' }) }
            </Text>
          </TouchableOpacity>
        </View>

        <LoadingButton
          onPress={pressAccess}
          label={formatMessage({ id: 'login.form.access' }).toUpperCase()}
          loading={calling}
        />

        <TouchableOpacity onPress={goToSignup}>
          <Text style={style.withoutAccount}>
            { formatMessage({ id: 'login.form.without_account' }) }
          </Text>
        </TouchableOpacity>

        <View style={style.social}>
          <Text style={style.socialText}>
            { formatMessage({ id: 'login.form.social_access' }) }
          </Text>

          <View style={style.buttons}>
            <FacebookLogin loginFacebook={pressFacebook} formatMessage={formatMessage} />
          </View>
        </View>
      </View>
    )
  }
}

export default Form
