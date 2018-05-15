import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

import style from './style'

import placeholder from 'images/session_placeholder.png'
import overlay from 'images/lotus_overlay.png'
import upper from 'images/session_upper.png'

class Header extends PureComponent {
  render() {
    return (
      <View>
        <ImageBackground source={placeholder} style={[ StyleSheet.absoluteFill, style.background ]}>
          <Image source={upper} style={[ StyleSheet.absoluteFill, style.upperGradient ]} />

          <LinearGradient
            style={style.downGradient}
            colors={[ 'rgba(240, 240, 240, 0)', '#eff0f0', '#eff0f0' ]}
            locations={[ 0.1, 0.5, 1]}
            start={{ x: 0.5, y: 0.1 }} end={{ x: 0.5, y: 1 }}
          />
        </ImageBackground>
        <Image source={overlay} style={[ StyleSheet.absoluteFill, style.overlay ]} />
      </View>
    )
  }
}

export default Header
