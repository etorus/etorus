import React, { PureComponent } from 'react'
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

import moment from 'config/moment'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import Home from '../components'

class Container extends PureComponent {
  state = {
    updates: 0,
  }

  componentDidMount() {
    const {
      fetchMeditations,
      navigation,
    } = this.props

    fetchMeditations({ navigation })
    this.timer = this.setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    this.clearInterval(this.timer)
  }

  tick() {
    this.setState({ updates: this.state.updates + 1 })
  }

  go = meditation =>
    () =>
      this.requestAnimationFrame(() =>
        this.props.navigation.navigate('Session', {
          sessionId: meditation.id,
          meditation,
        })
      )

  pressMenu = () =>
    this.requestAnimationFrame(() =>
      this.props.navigation.toggleDrawer()
    )

  render() {
    return <Home
      {...this.props}
      pressMenu={this.pressMenu}
      go={this.go}
      updates={this.state.updates}
      filteredMeditation={filterMeditationsStarted(this.props.meditations)}
    />
  }
}

const filterMeditationsStarted = meditations => {
  const fiveMinutesAgo = moment().subtract(4, 'minutes')

  return meditations.filter(
    ({ attributes: { start } }) => moment(start).isAfter(fiveMinutesAgo)
  )
}

const mapStateToProps = ({
  home: {
    meditations,
    calling,
    message,
    error,
  },
},
{
  intl,
  navigation,
}) => ({
  meditations,
  calling,
  message,
  error,
  intl,
  navigation,
})

const mapDispatchToProps = dispatch => ({
  openNotifications() {
    dispatch(actions.openNotifications())
  },

  closeNotifications() {
    dispatch(actions.closeNotifications())
  },

  openMenu() {
    dispatch(actions.openMenu())
  },

  closeMenu() {
    dispatch(actions.closeMenu())
  },

  fetchMeditations({ navigation }) {
    dispatch(actions.fetchMeditations({ navigation }))
  },

  pressMenu({ navigation }) {
    navigation.toggleDrawer()
  }
})

reactMixin.onClass(Container, TimerMixin)

const HomeContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Container)

export default HomeContainer
