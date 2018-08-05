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
      pressSend,
      intl: {
        formatMessage,
      },
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
          {
            fields(formatMessage).map(
              field => <Input 
                {...field}
                key={field.name}
                form='password'
              />
            )
          }
        </View>

        <LoadingButton
          onPress={pressSend}
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
