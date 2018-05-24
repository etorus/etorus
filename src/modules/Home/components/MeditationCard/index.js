import React, { PureComponent } from 'react'
import moment from 'moment'

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import { ProgressBar, Participants } from 'modules/Shared'

import style from './style'

import background from 'images/lotus_image.png'

const progressBarStyle = percent => StyleSheet.create({
  progressBarGradient: {
    width: (Dimensions.get('screen').width - 130) * percent,
    height: 14,
    borderRadius: 7,
  },

    progressBar: {
    marginTop: 10,
    width: Dimensions.get('screen').width - 130,
    height: 14,
    borderRadius: 7,
  },
})

class MeditationCard extends PureComponent {
  render() {
    const {
      go: onPress,
      meditation: {
        id,
        attributes: {
          title,
          start,
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
    ]

    const difference = moment().diff(moment(start), 'seconds')
    const percent = difference > 0 ? difference / 300 : 0
    const label = `${(difference / 60 - 5).toString().split('.')[0]}min`

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
                participants={participants}
                style={style}
              />
            </View>

            <ProgressBar
              style={progressBarStyle(percent)}
              label={label}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MeditationCard
