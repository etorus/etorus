import React from 'react'
import {
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native'

import style from './style'
import google from '../../../../assets/images/google.png'

const GoogleLogin = ({ intl, loginGoogle }) =>
  <TouchableHighlight style={style.button} onPress={loginGoogle}>
    <View style={style.wrapper}>
      <Image source={google} style={style.google} />
      <Text style={style.text}>
        GOOGLE
      </Text>
    </View>
  </TouchableHighlight>

export default GoogleLogin
