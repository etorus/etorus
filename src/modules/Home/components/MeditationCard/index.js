import React, { PureComponent } from 'react'
import moment from 'app/moment'

import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

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
    marginTop: 5,
    width: Dimensions.get('screen').width - 130,
    height: 14,
    borderRadius: 7,
  },
})

class MeditationCard extends PureComponent {
  state = {
    updates: 0
  }

  componentDidMount() {
    this.timer = this.setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    this.clearInterval(this.timer)
  }

  tick() {
    this.setState({ updates: this.state.updates + 1 })
  }

  render() {
    const {
      go: onPress,
      intl: {
        formatMessage,
      },
      meditation: {
        id,
        attributes: {
          title,
          start,
          lobby,
        },

        user: {
          attributes: {
            name
          },
        }
      }
    } = this.props

    const difference = moment().diff(moment(start), 'seconds')
    const percent = difference > 0 ? difference / 300 : 0
    const label = `${(difference / 60).toString().split('.')[0]}min`

    return(
      <TouchableOpacity onPress={onPress}>
        <View style={style.cardShadow}>
          <View style={style.card}>
            <Image source={background} resizeMode={'contain'} style={style.background} />

            <Text style={style.owner}>
              { formatMessage({ id: 'home.meditation_card.session_of' }) } { name }
            </Text>
            <Text style={style.title}>
              { moment(start).calendar() }
            </Text>

            <View style={style.participants}>
              <Text style={style.participantsText}>
                { formatMessage({ id: 'home.meditation_card.participating' }) }
              </Text>
              <Participants
                participants={lobby}
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

reactMixin.onClass(MeditationCard, TimerMixin)

export default MeditationCard
