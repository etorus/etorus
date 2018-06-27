import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import moment from 'app/moment'

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
      onCreateNotification,
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
          onPress={onCreateNotification}
          style={style.notification}
        >
          <Image source={notification} style={style.notificationIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Session
