import React, { PureComponent } from 'react'
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

import { AsyncStorage } from 'react-native'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'

import Sidebar from '../components'

class Container extends PureComponent {
  componentDidMount() {
    this.props.fetchProfile({
      navigation: this.props.navigation,
    })
  }

  logout = () =>
    this.requestAnimationFrame(() =>
      AsyncStorage.clear(() =>
        this.props.navigation.navigate('Auth')
      )
    )

  goToProfile = () =>
    this.requestAnimationFrame(() =>
      this.props.navigation.navigate('Profile')
    )

  onAddFacebook = () =>
    this.requestAnimationFrame(() =>
      this.props.addFacebook({
        navigation: this.props.navigation,
      })
    )

  onRemoveFacebook = () =>
    this.requestAnimationFrame(() =>
      this.props.removeFacebook({
        navigation: this.props.navigation,
      })
    )

  render() {
    return <Sidebar {...this.props}
      goToProfile={this.goToProfile}
      logout={this.logout}
      onAddFacebook={this.onAddFacebook}
      onRemoveFacebook={this.onRemoveFacebook}
    />
  }
}

const mapStateToProps = ({
  sidebar: {
    profile,
    calling,
    error,
    message,
  },
},
{
  navigation,
  intl,
}) => ({
  navigation,
  intl,
  profile,
  calling,
  error,
  message,
})

const mapDispatchToProps = dispatch => ({
  fetchProfile({ navigation }) {
    dispatch(actions.fetchProfile({ navigation }))
  },
  addFacebook({ navigation }) {
    dispatch(actions.addFacebook({ navigation }))
  },
  removeFacebook({ navigation }) {
    dispatch(actions.removeFacebook({ navigation }))
  }
})

reactMixin.onClass(Container, TimerMixin)

const SidebarContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default SidebarContainer
