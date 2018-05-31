import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'

import style from './style'
import logo from 'images/logo_horizontal_white.png'

class Signup extends PureComponent {
  render() {
    const {
      changeInput,
      intl,
      onPressSignup,
    } = this.props

    return (
      <View style={style.container}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#b834bc', '#fdaa04']}
          start={{ x: 0.5, y: 0.1 }} end={{ x: 0.8, y: 1.0 }}
        />

        <Image source={logo} style={style.brand} />

        <View style={style.inputs}>
          <TextInput
            onChangeText={value => changeInput({ name: 'name', value })}
            style={style.input}
            placeholder="Nome"
            underlineColorAndroid="transparent"
          />

          <TextInput
            onChangeText={value => changeInput({ name: 'email', value })}
            autoCapitalize="none"
            keyboardType="email-address"
            style={style.input}
            placeholder="E-mail"
            underlineColorAndroid="transparent"
          />

          <TextInput
            onChangeText={value => changeInput({ name: 'phone', value })}
            autoCapitalize="none"
            keyboardType="phone-pad"
            style={style.input}
            placeholder="Telefone"
            underlineColorAndroid="transparent"
          />

          <TextInput
            onChangeText={value => changeInput({ name: 'password', value })}
            autoCapitalize="none"
            secureTextEntry
            style={style.input}
            placeholder="Senha"
            underlineColorAndroid="transparent"
          />

          <TextInput
            onChangeText={value => changeInput({ name: 'password_confirmation', value })}
            autoCapitalize="none"
            secureTextEntry
            style={style.input}
            placeholder="Confirmar senha"
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity style={style.signupButton} onPress={onPressSignup}>
            <Text style={style.signupText}>
              CADASTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Signup
