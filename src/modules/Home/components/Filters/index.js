import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

import style from './style'

class Filters extends PureComponent {
  render() {
    return (
      <View style={style.filters}>
        <TouchableHighlight style={style.filter}>
          <LinearGradient
            style={[ StyleSheet.absoluteFill, style.filterBackground ]}
            colors={['#f09526', '#c64d96']}
            start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
          >
            <View style={style.filterWrapper}>
              <Text style={style.filterText}>
                JÁ COMEÇARAM
              </Text>
            </View>
          </LinearGradient>
        </TouchableHighlight>

        <TouchableHighlight style={style.filter}>
          <LinearGradient
            style={[ StyleSheet.absoluteFill, style.filterBackground ]}
            colors={['#f09526', '#c64d96']}
            start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
          >
            <View style={[ style.filterWrapper, style.filterWrapperUnselected ]}>
              <Text style={[ style.filterText, style.filterTextUnselected ]}>
                PRÓXIMAS SESSÕES
              </Text>
            </View>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Filters
