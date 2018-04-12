import React from 'react'
import {
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native'

import style from './style'
import facebook from '../../../../assets/images/facebook.png'

const FacebookLogin = ({ intl, loginFacebook }) =>
  <TouchableHighlight style={style.button} onPress={loginFacebook}>
    <View style={style.wrapper}>
      <Image source={facebook} style={style.facebook} />
      <Text style={style.text}>
        FACEBOOK
      </Text>
    </View>
  </TouchableHighlight>

export default FacebookLogin
