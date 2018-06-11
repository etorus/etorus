import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import logo from 'images/logo_horizontal_white.png'
import menu from 'images/menu.png'
import notification from 'images/notification.png'

import style from './style'

class Header extends PureComponent {
  render() {
    const { onPressMenu } = this.props

    return (
      <View style={style.header}>
        <LinearGradient
          style={[ StyleSheet.absoluteFill, style.background ]}
          colors={['#e47084', '#f79d24']}
          start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
        />

        <View style={style.wrapper}>
          <Image source={logo} style={style.brand} />

          <View style={style.menuWrapper}>
            <TouchableOpacity style={style.notification}>
              <Image source={notification} style={style.notificationIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={style.menu} onPress={onPressMenu}>
              <Image source={menu} style={style.menuIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Header
