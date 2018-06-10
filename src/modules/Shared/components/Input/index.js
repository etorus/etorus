import React, { PureComponent } from 'react'

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
    } = this.props

    return <TextInput
      onChangeText={value => onChangeText({ name, value })}
      style={style.input}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  }
}

Input.defaultProps = {
  autoCapitalize: 'none',
  keyboardType: 'default',
  secureTextEntry: false,
}

export default Input
