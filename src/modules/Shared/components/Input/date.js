import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import style from './style'

const Input = ({
  name,
  placeholder,
  onChangeText,
  autoCapitalize,
  keyboardType,
  secureTextEntry,
  defaultValue,
  editable,
  error,
}) => {
  const [ currentValue, setCurrentValue ] = useState(placeholder)

  return (
    <View style={style.wrapper}>
      <TextInputMask
        style={[ style.input, (error ? style.error : null ) ]}
        type={'datetime'}
        options={{ format: 'YYYY/MM/DD' }}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={currentValue}
        onChangeText={value => {
          setCurrentValue(value)
          onChangeText({ name, value })}}
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

Input.defaultProps = {
  autoCapitalize: 'none',
  keyboardType: 'default',
  secureTextEntry: false,
  defaultValue: '',
  editable: true,
  error: undefined,
}

export default Input
