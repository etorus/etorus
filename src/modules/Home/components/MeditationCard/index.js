import React, { PureComponent } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import style from './style'

import background from 'images/lotus_image.png'
import avatar from 'images/avatar.jpg'

class MeditationCard extends PureComponent {
  render() {
    const {
      meditation: {
        attributes: {
          title,
        },

        user: {
          attributes: {
            name
          },
        }
      }
    } = this.props

    return(
      <View style={style.cardShadow}>
        <View style={style.card}>
          <Image source={background} style={style.background} />

          <Text style={style.owner}>
            Sessão do { name }
          </Text>
          <Text style={style.title}>
            { title }
          </Text>

          <View style={style.participants}>
            <Text style={style.participantsText}>Participando</Text>

            <Image source={avatar} style={style.participant} />
            <Image source={avatar} style={style.participant} />
            <Image source={avatar} style={style.participant} />
            <Image source={avatar} style={style.participant} />
            <LinearGradient
              style={style.more}
              colors={['#f09526', '#c64d96']}
              start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
            >
              <View style={style.moreWrapper}>
                <Text style={style.moreText}>
                  +25
                </Text>
              </View>
            </LinearGradient>

          </View>

          <View style={style.progressBar}>
            <LinearGradient
              style={style.progressBarGradient}
              colors={['#f09526', '#c64d96']}
              start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
            >
              <Text style={style.progressBarText}>30min</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    )
  }
}

export default MeditationCard
