import React, { PureComponent } from 'react'
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native'

import style from './style'

class LoadingButton extends PureComponent {
  render() {
    const {
      customText = {},
      customWrapper = {},
      loading,
      onPress,
      label,
    } = this.props

    const handleOnPress = () => {
      return loading
        ? () => {}
        : onPress
    }

    return (
      <TouchableOpacity style={{...style.button, ...customWrapper}} onPress={handleOnPress()}>
        {
          loading
            ? <ActivityIndicator size="small" color="#c64d96" />
            : <Text style={{...style.text, ...customText}}>{ label }</Text>
        }
      </TouchableOpacity>
    )
  }
}
export default LoadingButton
