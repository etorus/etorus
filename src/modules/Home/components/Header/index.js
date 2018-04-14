import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import logo from '../../../../assets/images/logo_horizontal_white.png'

import style from './style'

class Header extends PureComponent {
  render() {
    return (
      <View style={style.header}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#e47084', '#f79d24']}
          start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
        />

        <View style={style.wrapper}>
          <View style={style.brandContainer}>
            <Image source={logo} style={style.brand} />
          </View>

          <View style={style.notification}>
          </View>

          <View style={style.menu}>
          </View>
        </View>
      </View>
    )
  }
}

export default Header
