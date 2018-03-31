import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

import style from './style'
import background from '../../../../assets/images/background_login.png'
import logo from '../../../../assets/images/complete_logo_white.png'

const Splash = () =>
  <View style={style.container}>
    <Image source={background} style={[ StyleSheet.absoluteFill, style.background ]} />

    <View stye={style.imageContainer}>
      <Image source={logo} style={style.brand} />
    </View>

    <Text style={style.text}>
      {`Espaços de 30 minutos de \nmeditação coletiva`}
    </Text>

    <View style={style.buttons}>
      <TouchableHighlight style={style.primary}>
        <Text style={style.textPrimary}>COMEÇAR AGORA</Text>
      </TouchableHighlight>

      <Text style={style.textBetween}>
        ou
      </Text>

      <TouchableHighlight style={style.secondary}>
        <Text style={style.textSecondary}>JÁ TENHO UMA CONTA</Text>
      </TouchableHighlight>
    </View>
  </View>

export default Splash
