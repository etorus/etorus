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
    const formatMessage = this.props.intl.formatMessage

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
                { formatMessage({ id: 'home.filter.next_sessions' }).toUpperCase() }
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
                { formatMessage({ id: 'home.filter.my_sessions' }).toUpperCase() }
              </Text>
            </View>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Filters
