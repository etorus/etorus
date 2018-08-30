import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'

import { Uploader, Input, LoadingButton } from 'modules/Shared'

import style from './style'
import fields from './fields'

import logo from 'images/logo_horizontal_white.png'

const mountFacebookFields = facebookData => ({
  avatar: facebookData.picture ? facebookData.picture.data.url : '',
  email: facebookData.email || '',
  name: facebookData.name || '',
  facebook_id: facebookData.id || '',
})

class Signup extends PureComponent {
  // componentDidMount() {
  //   const {
  //     facebook,
  //     changeInput,
  //     onSelectImage,
  //   } = this.props

  //   const facebookFields = mountFacebookFields(facebook)

  //   Object.keys(facebookFields).map(key => changeInput({
  //     name: key, 
  //     value: facebookFields[key],
  //   }))

  //   onSelectImage(facebookFields.avatar)
  // }

  render() {
    const {
      intl: {
        formatMessage,
      },
      pressSignup,
      calling,
    } = this.props

    // const facebookFields = mountFacebookFields(facebook)

    // const fieldsWithValuesAndErrors = fields(formatMessage).map(
    //   field => ({
    //     ...field,
    //     defaultValue: facebookFields[field.name],
    //     error: validation[field.name]
    //   })
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
          <Uploader {...this.props}
            onUpload={ value => changeInput({ name: 'avatar', value }) }
          />

          {
            fields.map(
              field => <Input
                {...field}
                key={field.name}
                form='signup'
              />
            )
          }

          <LoadingButton
            onPress={pressSignup}
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
