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

class Profile extends PureComponent {
  render() {
    const {
      changeInput,
      intl: {
        formatMessage,
      },
      onPressSave,
      goBack,
      profile,
      calling,
    } = this.props

    const fieldsWithValues = fields(formatMessage).map(
      field => ({ ...field, defaultValue: profile.attributes[field.name] })
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
            fieldsWithValues.map(
              field => <Input key={field.name} {...field} onChangeText={changeInput} />
            )
          }

          <LoadingButton
            onPress={onPressSave}
            label={formatMessage({ id: 'profile.form.save' }).toUpperCase()}
            loading={calling}
          />

          <TouchableOpacity onPress={goBack}>
            <Text style={style.goBack}>
              { formatMessage({ id: 'profile.form.back' }) }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Profile
