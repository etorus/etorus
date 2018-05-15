import React, { PureComponent } from 'react'

import moment from 'moment'
import Sound from 'react-native-sound'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import Session from '../components'

const DIR = Sound.MAIN_BUNDLE

class Container extends PureComponent {
  state = {
    audio: null,
    duration: 0,
    currentTime: 0,
    playing: false,
  }

  componentDidMount() {
    Sound.setCategory('Playback')
    this.props.fetch({ navigation: this.props.navigation })
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      meditation,
      calling,
    } = this.props

    const {
      audio,
      duration,
      currentTime,
      playing,
    } = this.state

    const start = moment(meditation.attributes.start)
    const secondsAfterStart = parseFloat(moment().diff(start, 'seconds'))

    if (!calling && !audio) {
      const sound = new Sound('es.mp3', DIR, (_, { duration }) => {
        this.setState({ audio: sound, duration })
        this.timer = setInterval(() => this.tick(), 1000)
      })
    }

    if (audio && !playing && audio.isLoaded() && secondsAfterStart >= 0) {
      this.setState({ playing: true })

      audio.setCurrentTime(secondsAfterStart)
      audio.play()
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
      clearInterval(this.timer)
    }
  }

  render() {
    const {
      duration,
      currentTime,
    } = this.state

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
