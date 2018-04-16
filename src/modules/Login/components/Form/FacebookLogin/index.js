import React, { PureComponent } from 'react'
import {
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native'

import style from './style'
import facebook from 'images/facebook.png'

class FacebookLogin extends PureComponent {
  render() {
    const { intl, loginFacebook } = this.props

    return(
      <TouchableHighlight style={style.button} onPress={loginFacebook}>
        <View style={style.wrapper}>
          <Image source={facebook} style={style.facebook} />
          <Text style={style.text}>
            { intl.formatMessage({ id: 'login.form.facebook' }).toUpperCase() }
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default FacebookLogin
