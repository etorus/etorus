import React, { PureComponent } from 'react'

import Sound from 'react-native-sound'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import Session from '../components'

class Container extends PureComponent {
  state = {
    audio: null,
    duration: 0,
    currentTime: 0,
  }

  componentDidMount() {
    Sound.setCategory('Playback')
    this.props.fetch({ navigation: this.props.navigation })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.state.calling &&
      !this.state.audio &&
      !this.timer
    ) {
      const audio = new Sound(
        'es.mp3',
        Sound.MAIN_BUNDLE,
        (error, { duration }) => {
          if (error) { return console.log(error) }

          this.setState({ audio, duration })

          this.timer = setInterval(() => this.tick(), 1000)
        }
      )
    }
  }

  tick() {
    this.state.audio.getCurrentTime(
      (seconds) => this.setState({ currentTime: seconds / 60 })
    )
  }

  componentWillUnmount() {
    if (this.state.audio) {
      this.state.audio.stop()
    }
  }

  render() {
    const {
      meditation,
      calling,
    } = this.props

    const {
      audio,
      duration,
      currentTime,
    } = this.state

    if (audio && audio.isLoaded()) {
      audio.play()
    }

    const minutes = currentTime.toString().split('.')[0]
    const normalizedMinutes = `${minutes}min`

    const progressPercent = currentTime * 100 / duration

    return (
      <Session {...this.props}
        currentTime={normalizedMinutes}
        progressPercent={progressPercent}
      />
    )
  }
}

const mapStateToProps = ({
  session: {
    meditation,
    calling,
    message,
    error,
  },
},
{
  intl,
  navigation,
}) => ({
  meditation,
  calling,
  message,
  error,
  intl,
  navigation,
})

const mapDispatchToProps = dispatch => ({
  fetch({ navigation }) {
    dispatch(actions.fetch({
      navigation,
      id: navigation.state.params.sessionId
    }))
  },
})

const SessionContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Container)

export default SessionContainer
