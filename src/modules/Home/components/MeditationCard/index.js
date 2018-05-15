import React, { PureComponent } from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { ProgressBar, Participants } from 'modules/Shared'

import style from './style'

import background from 'images/lotus_image.png'

class MeditationCard extends PureComponent {
  render() {
    const {
      go: onPress,
      meditation: {
        id,
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

    const participants = [
      { avatar: 'https://avatars1.githubusercontent.com/u/3676032?s=460' },
      { avatar: 'https://avatars1.githubusercontent.com/u/3676032?s=460' },
      { avatar: 'https://avatars1.githubusercontent.com/u/3676032?s=460' },
      { avatar: 'https://avatars1.githubusercontent.com/u/3676032?s=460' },
    ]

    return(
      <TouchableOpacity onPress={onPress(id)}>
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
              <Participants
                showMore
                participants={participants}
                quantity={'+5'}
                style={style}
              />
            </View>

            <ProgressBar style={style} label="30min" />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MeditationCard
