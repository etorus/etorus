import React, { PureComponent } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

import style from './style'
import placeholder from 'images/logo.png'

class Uploader extends PureComponent {
  render() {
    const {
      image,
      openPicker,
      intl: {
        formatMessage,
      },
    } = this.props

    return (
      <View style={style.uploader}>
        <TouchableOpacity onPress={openPicker}>
          <View style={style.wrapperImagem}>
            {
              image
                ? <Image source={{ uri: image }} style={style.image} />
                : <Image source={placeholder} style={style.image} />
            }
          </View>
        </TouchableOpacity>

        <Text style={style.text}>
          { formatMessage({ id: 'shared.uploader.change_image' }) }
        </Text>
      </View>
    )
  }
}

export default Uploader
