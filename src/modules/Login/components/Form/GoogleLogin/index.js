import React, { PureComponent } from 'react'
import {
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native'

import style from './style'
import google from 'images/google.png'

class GoogleLogin extends PureComponent {
  render() {
    const { intl, loginGoogle } = this.props
    return (
      <TouchableHighlight style={style.button} onPress={loginGoogle}>
        <View style={style.wrapper}>
          <Image source={google} style={style.google} />
          <Text style={style.text}>
            { intl.formatMessage({ id: 'login.form.google' }).toUpperCase() }
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default GoogleLogin
