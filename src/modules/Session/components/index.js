import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import Extra from './Extra'
import Header from './Header'
import Info from './Info'
import ProgressArea from './ProgressArea'

import style from './style'
import arrow from 'images/arrow.png'

class Session extends PureComponent {
  render() {
    const {
      currentTime,
      progressPercent,
      back,
      meditation: {
        attributes: {
          title,
          audio,
          start,
        },

        user: {
          attributes: {
            name: owner,
          },
        },
      }
    } = this.props

    const participants = [
      { avatar: 'https://avatars1.githubusercontent.com/u/3676032?s=460' },
    ]

    return (
      <View style={style.session}>
        <Header />

        <View style={style.wrapper}>
          <Info
            owner={owner}
            title={title}
            audio={audio}
          />

          <View>
            <ProgressArea label={currentTime} progressPercent={progressPercent} />

            <Extra start={start} participants={participants} />
          </View>
        </View>


        <TouchableOpacity
          onPress={this.props.back}
          style={[ StyleSheet.absoluteFill, style.arrowBack ]}
        >
          <Image source={arrow} style={style.arrowBackImage} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Session
