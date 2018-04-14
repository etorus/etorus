import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import background from '../../../../assets/images/background_header.png'
import logo from '../../../../assets/images/complete_logo_white.png'

import style from './style'

class Header extends PureComponent {
  render() {
    return (
      <View style={style.header}>
        <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />

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
