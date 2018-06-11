import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'

import style from './style'

class Input extends PureComponent {
  render() {
    const {
      name,
      placeholder,
      onChangeText,
      autoCapitalize,
      keyboardType,
      secureTextEntry,
      defaultValue,
      editable,
    } = this.props

    return <TextInput
      onChangeText={value => onChangeText({ name, value })}
      style={style.input}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      defaultValue={defaultValue}
      editable={editable}
    />
  }
}

Input.defaultProps = {
  autoCapitalize: 'none',
  keyboardType: 'default',
  secureTextEntry: false,
  defaultValue: '',
  editable: true,
}

export default Input
