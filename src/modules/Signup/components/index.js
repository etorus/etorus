import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'

import { Uploader, Input, LoadingButton } from 'modules/Shared'

import style from './style'
import fields from './fields'

import logo from 'images/logo_horizontal_white.png'

class Signup extends PureComponent {
  render() {
    const {
      changeInput,
      intl: {
        formatMessage,
      },
      onPressSignup,
      goToLogin,
      calling,
      validation,
    } = this.props

    const fieldsWithErrors = fields(formatMessage).map(
      field => ({ ...field, error: validation[field.name] })
    )

    return (
      <View style={style.container}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#b834bc', '#fdaa04']}
          start={{ x: 0.5, y: 0.1 }} end={{ x: 0.8, y: 1.0 }}
        />

        <Image source={logo} style={style.brand} />

        <View style={style.inputs}>
          <Uploader {...this.props}
            onUpload={ value => changeInput({ name: 'avatar', value }) }
          />

          {
            fieldsWithErrors.map(
              field => <Input key={field.name} {...field} onChangeText={changeInput} />
            )
          }

          <LoadingButton
            onPress={onPressSignup}
            loading={calling}
            label={formatMessage({ id: 'signup.form.signup' }).toUpperCase()}
          />

          <TouchableOpacity onPress={goToLogin}>
            <Text style={style.alreadyAccount}>
              { formatMessage({ id: 'signup.form.already_have_account' }) }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Signup
