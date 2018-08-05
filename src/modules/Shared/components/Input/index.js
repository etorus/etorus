import React, { PureComponent } from 'react'
import { TextInput, View, Text } from 'react-native'

import style from './style'

class Input extends PureComponent {
  render() {
    const {
      name,
      placeholder,
      changeInput,
      autoCapitalize,
      keyboardType,
      secureTextEntry,
      defaultValue,
      editable,
      error,
    } = this.props

    return (
      <View style={style.wrapper}>
        <TextInput
          onChangeText={value => changeInput({ name, value })}
          style={[ style.input, (error ? style.error : null ) ]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          editable={editable}
        />
        {
          error
            ? <Text style={style.textError}>
                { error[0].substr(error[0].indexOf(" ") + 1) }
              </Text>
            : null
        }
      </View>
    )
  }
}

Input.defaultProps = {
  autoCapitalize: 'none',
  keyboardType: 'default',
  secureTextEntry: false,
  defaultValue: '',
  editable: true,
  error: undefined,
}

export default Input
