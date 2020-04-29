import React, { PureComponent } from 'react'
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import Swiper from 'react-native-swiper';

import moment from 'app/moment'

import Extra from './Extra'
import Header from './Header'
import Info from './Info'
import ProgressArea from './ProgressArea'

import { Exercises } from 'modules/Shared'
import { getListAndChunk } from 'modules/Shared/components/Exercises/Helpers/index.js'

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
      <ScrollView style={style.session}>
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

            <Swiper
              style={style.swipper}
              pagingEnabled={true}
              showsPagination={true}
              dot={<View style={style.swipperDot} />}
              activeDot={<View style={style.swipperActiveDot} />}
              paginationStyle={style.swipperPaginationStyle}
            >
              {
                getListAndChunk().map((list, i) =>
                  <Exercises key={i} list={list} fm={formatMessage} />
                )
              }
            </Swiper>
          </View>
        </View>

        <TouchableOpacity
          onPress={back}
          style={[ StyleSheet.absoluteFill, style.arrowBack ]}
        >
          <Image source={arrow} resizeMode={'contain'} style={style.arrowBackImage} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onCreateNotification}
          style={style.notification}
        >
          <Image source={notification} resizeMode={'contain'} style={style.notificationIcon} />
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Session
