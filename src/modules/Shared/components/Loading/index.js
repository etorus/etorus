import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

import style from './style'
import completeLogo from 'images/complete_logo.png'

class Loading extends PureComponent {
  render() {
    return (
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image source={completeLogo} style={style.brand} />
        </View>
        <Text style={style.version}>
          Version 1.0.0
        </Text>
      </View>
    )
  }
}

export default Loading
