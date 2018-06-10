import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'

import Profile from '../components'

class Container extends PureComponent {
  onPressSave = () => {
    const {
      pressSave,
      navigation,
      inputs: fields,
      profile: {
        id,
      },
    } = this.props

    return () => pressSave({ fields, navigation, id })
  }

  goBack = () =>
    () => this.props.navigation.goBack()

  render() {
    return <Profile {...this.props}
      onPressSave={this.onPressSave()}
      goBack={this.goBack()}
    />
  }
}

const mapStateToProps = ({
  profile: {
    inputs,
    calling,
    authToken,
    message,
    error,
  },
  sidebar: {
    profile,
  },
},
{
  intl,
  navigation,
}) => ({
  profile,
  inputs,
  calling,
  authToken,
  message,
  error,
  intl,
  navigation,
})

const mapDispatchToProps = dispatch => ({
  changeInput({ name, value }) {
    dispatch(changeInput({ name, value }))
  },
  pressSave({ fields, navigation }) {
    dispatch(pressSave({ fields, navigation }))
  },
})

const ProfileContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default ProfileContainer
