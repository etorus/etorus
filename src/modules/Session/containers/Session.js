import React, { PureComponent } from 'react'
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

import moment from 'moment'
import Sound from 'react-native-sound'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import pusher from 'config/pusher'
import { getNormalizedLocale } from 'config/moment'

import Session from '../components'

const DIR = Sound.MAIN_BUNDLE

class Container extends PureComponent {
  state = {
    audio: null,
    duration: 0,
    currentTime: 0,
    playing: false,
    lobby: null,
    updates: 0,
  }

  componentDidMount() {
    const { navigation, enterLobby } = this.props

    Sound.setCategory('Playback')

    this.timer = this.setInterval(() => this.tick(), 1000)

    this.sessionChannel = pusher.subscribe(this.getChannelName())
    this.sessionChannel.bind(
      'session:bell',
      ({ data: { attributes: { lobby } } }) => this.lobbyChange(lobby)
    )

    enterLobby({ navigation })
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      meditation: {
        attributes: {
          start,
          audio: meditationAudio,
        },
      },
    } = this.props

    const {
      audio,
      playing,
    } = this.state

    const meditationStart = moment(start)
    const secondsAfterStart = parseFloat(moment().diff(meditationStart, 'seconds'))

    if (!audio) {
      const normalizedLocale = getNormalizedLocale()
        ? getNormalizedLocale().i18n
        : 'en'
      const audioFile = `${meditationAudio}_${normalizedLocale}.mp3`
      const sound = new Sound(audioFile, DIR, (_, { duration }) => {
        this.setState({ audio: sound, duration })
      })
    }

    if (audio && !playing && audio.isLoaded() && secondsAfterStart >= 0) {
      this.setState({ playing: true })

      audio.setCurrentTime(secondsAfterStart)
      audio.play()
    }
  }

  tick() {
    const {
      audio,
      updates,
      currentTime,
    } = this.state

    if (!audio) {
      return this.setState({ updates: updates + 1 })
    }

    audio.getCurrentTime(
      (seconds) => this.setState({
        currentTime: seconds / 60,
        updates: updates + 1,
      })
    )
  }

  componentWillUnmount() {
    if (this.state.audio) {
      this.state.audio.stop()
    }

    this.clearInterval(this.timer)
    this.sessionChannel.unsubscribe(this.getChannelName())
    this.props.leaveLobby({ navigation: this.props.navigation })
  }

  lobbyChange = lobby => this.setState({ lobby })

  back = () =>
    this.requestAnimationFrame(() =>
      this.props.navigation.navigate('Home')
    )

  getChannelName = () =>
    `MEDITATION_LOBBY${this.props.navigation.state.params.sessionId}`

  onCreateNotification = () =>
    this.requestAnimationFrame(() =>
      this.props.createNotification({
        navigation: this.props.navigation,
        formatMessage: this.props.intl.formatMessage,
        meditationStart: this.props.meditation.attributes.start
      })
    )

  render() {
    const {
      duration,
      currentTime,
      lobby,
    } = this.state

    const minutes = currentTime.toString().split('.')[0]
    const normalizedMinutes = `${minutes}min`
    const progressPercent = currentTime ? (currentTime * 100 / duration) : 0

    return (
      <Session {...this.props}
        currentTime={normalizedMinutes}
        progressPercent={progressPercent}
        back={this.back}
        onCreateNotification={this.onCreateNotification}
        lobby={lobby === null ? this.props.meditation.attributes.lobby : lobby}
      />
    )
  }
}

const mapStateToProps = (_,
{
  intl,
  navigation,
}) => ({
  meditation: navigation.state.params.meditation,
  intl,
  navigation,
})

const mapDispatchToProps = dispatch => ({
  enterLobby({ navigation }) {
    dispatch(actions.enterLobby({
      navigation,
      id: navigation.state.params.sessionId
    }))
  },
  leaveLobby({ navigation }) {
    dispatch(actions.leaveLobby({
      navigation,
      id: navigation.state.params.sessionId
    }))
  },
  createNotification({ navigation, formatMessage, meditationStart }) {
    dispatch(actions.createNotification({
      navigation,
      formatMessage,
      meditationStart,
      meditationId: navigation.state.params.sessionId,
    }))
  },
})

reactMixin.onClass(Container, TimerMixin)

const SessionContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Container)

export default SessionContainer
