import React, { PureComponent } from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import baseStyle from './style'
import placeholder from 'images/logo.png'

class Participants extends PureComponent {
  moreElement = ({ quantity }) => (
    <LinearGradient
      style={baseStyle.more}
      colors={['#f09526', '#c64d96']}
      start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
    >
      <View style={baseStyle.moreWrapper}>
        <Text style={baseStyle.moreText}>
          { quantity }
        </Text>
      </View>
    </LinearGradient>
  )

  render() {
    const {
      participants,
      showMore,
      quantity,
      style,
    } = this.props

    return (
      <View style={baseStyle.wrapper}>
        {
          participants.map(
            (participant, index) =>
              <Image
                source={
                  participant.avatar
                    ? { uri: participant.avatar }
                    : placeholder
                }
                style={[ baseStyle.participant, style.participant ]}
                key={index}
              />
          )
        }

        {
          showMore
            ? this.moreElement({ quantity })
            : null
        }
      </View>
    )
  }
}

export default Participants
