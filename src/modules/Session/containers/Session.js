import React, { PureComponent } from 'react'

import moment from 'moment'
import Sound from 'react-native-sound'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import pusher from 'app/pusher'

import Session from '../components'

const DIR = Sound.MAIN_BUNDLE

class Container extends PureComponent {
  state = {
    audio: null,
    duration: 0,
    currentTime: 0,
    playing: false,
    lobby: null,
  }

  componentDidMount() {
    const { navigation, enterLobby } = this.props

    Sound.setCategory('Playback')
    this.props.fetchMeditation({ navigation })

    this.sessionChannel = pusher.subscribe(this.getChannelName())
    this.sessionChannel.bind(
      'session:bell',
      ({ lobby }) => this.lobbyChange(lobby)
    )

    enterLobby({ navigation })
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
    }

    clearInterval(this.timer)
    this.sessionChannel.unsubscribe(this.getChannelName())
    this.props.leaveLobby({ navigation: this.props.navigation })
  }

  lobbyChange = lobby => this.setState({ lobby })

  back = () => {
    console.log('baking',this.props.navigation.goBack())
    this.props.navigation.navigate('Home')
  }

  getChannelName = () =>
    `MEDITATION_LOBBY${this.props.navigation.state.params.sessionId}`

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
        lobby={lobby === null ? this.props.meditation.attributes.lobby : lobby}
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
  fetchMeditation({ navigation }) {
    dispatch(actions.fetchMeditation({
      navigation,
      id: navigation.state.params.sessionId
    }))
  },
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
})

const SessionContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Container)

export default SessionContainer
