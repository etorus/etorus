import React from 'react'
import style from './style'
import completeLogo from '../../../../assets/images/complete_logo.png'

import {
  View,
  Text,
  Image,
} from 'react-native'

const Loading = () =>
  <View style={style.container}>
    <View style={style.imageContainer}>
      <Image source={completeLogo} style={style.brand} />
    </View>
    <Text style={style.version}>
      Version 1.0.0
    </Text>
  </View>

export default Loading
