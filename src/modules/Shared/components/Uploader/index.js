import React, { PureComponent } from 'react'
import {
  View,
  Image,
  Text,
} from 'react-native'

import style from './style'
import placeholder from 'images/logo.png'

class Uploader extends PureComponent {
  render() {
    return (
      <View style={style.uploader}>
        <View style={style.wrapperImagem}>
          <Image source={placeholder} style={style.image} />
        </View>

        <Text style={style.text}>
          Altere sua Imagem
        </Text>
      </View>
    )
  }
}

export default Uploader
