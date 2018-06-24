import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native'

import style from './style'
import facebook from 'images/facebook.png'

class FacebookLogin extends PureComponent {
  render() {
    const { formatMessage, loginFacebook } = this.props

    return(
      <TouchableOpacity style={style.button} onPress={loginFacebook}>
        <View style={style.wrapper}>
          <Image source={facebook} style={style.facebook} />
          <Text style={style.text}>
            { formatMessage({ id: 'login.form.facebook' }).toUpperCase() }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FacebookLogin
