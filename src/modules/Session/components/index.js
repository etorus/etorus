import React, { PureComponent } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Sound from 'react-native-sound'

import style from './style'

class Session extends PureComponent {
  state = {
    audio: null,
    duration: 0,
  }

  componentDidMount() {
    Sound.setCategory('Playback')

    const audio = new Sound(
      'es.mp3',
      Sound.MAIN_BUNDLE,
      (error, { duration }) => {
        if (error) { return console.log(error) }

        this.setState({ audio, duration })
      }
    )
  }

  componentWillUnmount() {
    if (this.state.audio) {
      this.state.audio.stop()
    }
  }

  render() {
    const {
      session,
      calling,
      navigation: {
        state: {
          params: {
            sessionId,
          },
        },
      },
    } = this.props

    const {
      audio,
      duration,
    } = this.state

    if (audio && audio.isLoaded()) {
      audio.play()
    }

    return (
      <View style={style.session}>
        <Text>Session id: {sessionId}</Text>
        <Text>Duration: {duration / 60}min</Text>
      </View>
    )
  }
}

export default Session
