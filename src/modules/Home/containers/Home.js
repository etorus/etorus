import React, { PureComponent } from 'react'

import moment from 'moment'
import 'moment/locale/pt'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import  * as actions from '../redux/actions'

import Home from '../components'

moment.locale('pt-BR')

class Container extends PureComponent {
  state = {
    updates: 0,
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000 * 60)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({ updates: this.state.updates + 1 })
  }

  render() {
    return <Home
      {...this.props}
      updates={this.state.updates}
      filteredMeditation={filterMeditationsStarted(this.props.meditations)}
    />
  }
}

const filterMeditationsStarted = meditations => {
  const fiveMinutesAgo = moment().subtract(5, 'minutes')

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

  fetch({ navigation }) {
    dispatch(actions.fetch({ navigation }))
  },
})

const HomeContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Container)

export default HomeContainer
