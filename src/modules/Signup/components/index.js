import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'

import { Uploader, Input, InputDate, LoadingButton, ButtonTermsOfUse } from 'modules/Shared'

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
  constructor(props) {
    super(props)
    this.state = { agreement: false }
  }

  componentDidMount() {
    const {
      facebook,
      changeInput,
      onSelectImage,
    } = this.props

    const facebookFields = mountFacebookFields(facebook)

    Object.keys(facebookFields).map(key => changeInput({
      name: key, 
      value: facebookFields[key],
    }))

    onSelectImage(facebookFields.avatar)
  }

  updateAgreement() {
    this.setState({
      agreement: true
    })
  }

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
      facebook,
      navigation,
    } = this.props

    const facebookFields = mountFacebookFields(facebook)

    const fieldsWithValuesAndErrors = fields(formatMessage).map(
      field => ({
        ...field,
        defaultValue: facebookFields[field.name],
        error: validation[field.name]
      })
    )

    return (
      <View style={style.container}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#b834bc', '#fdaa04']}
          start={{ x: 0.5, y: 0.1 }} end={{ x: 0.8, y: 1.0 }}
        />

        <Image source={logo} resizeMode={'contain'} style={style.brand} />

        <ScrollView contentContainerStyle={style.inputs}>
        
          <Uploader {...this.props}
            onUpload={ value => changeInput({ name: 'avatar', value }) }
          />

          {
            fieldsWithValuesAndErrors.map(
              field => {
                if (field.name === 'age') {
                  return <InputDate key={field.name} {...field} onChangeText={changeInput} />
                }
                return <Input key={field.name} {...field} onChangeText={changeInput} />
              }
            )
          }
          <ButtonTermsOfUse
            callBack={() => this.updateAgreement()}
            status={this.state.agreement}
            navigation={navigation}
            formatMessage={formatMessage}  
          />

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
        </ScrollView>
      </View>
    )
  }
}

export default Signup
