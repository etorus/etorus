import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native'

import style from './style'
import google from 'images/google.png'

class GoogleLogin extends PureComponent {
  render() {
    const { intl, loginGoogle } = this.props
    return (
      <TouchableOpacity style={style.button} onPress={loginGoogle}>
        <View style={style.wrapper}>
          <Image source={google} resizeMode={'contain'} style={style.google} />
          <Text style={style.text}>
            { intl.formatMessage({ id: 'login.form.google' }).toUpperCase() }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default GoogleLogin
