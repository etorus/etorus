import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { Input, LoadingButton } from 'modules/Shared'

import style from './style'
import fields from './fields'

import logo from 'images/logo_horizontal_white.png'

class Password extends PureComponent {
  render() {
    const {
      goBack,
      calling,
      validation,
      onPressSend,
      changeInput,
      intl: {
        formatMessage,
      },
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

        <Image source={logo} resizeMode={'contain'} style={style.brand} />

        <View style={style.inputs}>
          {
            fieldsWithErrors.map(
              field => <Input key={field.name} {...field} onChangeText={changeInput} />
            )
          }
        </View>

        <LoadingButton
          onPress={onPressSend}
          label={formatMessage({ id: 'password.form.send' }).toUpperCase()}
          loading={calling}
        />

        <TouchableOpacity onPress={goBack}>
          <Text style={style.goBack}>
            { formatMessage({ id: 'password.form.back' }) }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Password
