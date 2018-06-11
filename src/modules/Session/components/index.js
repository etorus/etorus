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
      lobby,
      intl: {
        formatMessage,
      },
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

    console.log(lobby)

    return (
      <View style={style.session}>
        <Header />

        <View style={style.wrapper}>
          <Info
            owner={owner}
            title={title}
            audio={audio}
            formatMessage={formatMessage}
          />

          <View>
            <ProgressArea
              label={currentTime}
              progressPercent={progressPercent}
              formatMessage={formatMessage}
            />

            <Extra
              start={start}
              participants={lobby}
              formatMessage={formatMessage}
            />
          </View>
        </View>


        <TouchableOpacity
          onPress={back}
          style={[ StyleSheet.absoluteFill, style.arrowBack ]}
        >
          <Image source={arrow} style={style.arrowBackImage} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Session
