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

import { Uploader, Input } from 'modules/Shared'

import style from './style'
import fields from './fields'

import logo from 'images/logo_horizontal_white.png'

class Profile extends PureComponent {
  render() {
    const {
      changeInput,
      intl,
      onPressSave,
      goBack,
      profile,
    } = this.props

    const fieldsWithValues = fields(intl).map(
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
              field => <Input {...field} onChangeText={changeInput} />
            )
          }

          <TouchableOpacity style={style.saveButton} onPress={onPressSave}>
            <Text style={style.saveText}>
              { intl.formatMessage({ id: 'profile.form.save' }).toUpperCase() }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goBack}>
            <Text style={style.goBack}>
              { intl.formatMessage({ id: 'profile.form.back' }) }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Profile
