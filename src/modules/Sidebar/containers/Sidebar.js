import React, { PureComponent } from 'react'
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

  goToProfile = () =>
    () => this.props.navigation.navigate('Profile')

  render() {
    return <Sidebar {...this.props} goToProfile={this.goToProfile()} />
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
  }
})

const SidebarContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default SidebarContainer
