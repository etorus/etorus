import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import moment from 'config/moment'

import Extra from './Extra'
import Header from './Header'
import Info from './Info'
import ProgressArea from './ProgressArea'

import style from './style'
import arrow from 'images/arrow.png'
import notification from 'images/notification.png'

class Session extends PureComponent {
  render() {
    const {
      currentTime,
      progressPercent,
      back,
      lobby,
      createNotification,
      intl: {
        formatMessage,
      },
      meditation: {
        attributes: {
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

    return (
      <View style={style.session}>
        <Header />

        <View style={style.wrapper}>
          <Info
            owner={owner}
            title={moment(start).calendar()}
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
              start={moment(start).calendar()}
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

        <TouchableOpacity
          onPress={createNotification}
          style={style.notification}
        >
          <Image source={notification} style={style.notificationIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Session
