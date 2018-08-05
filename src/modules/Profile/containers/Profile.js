import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'
import { selectImage } from 'modules/Shared/redux/uploader/actions'

import { apiCalls, apiStatuses } from 'api'

import Profile from '../components'

class Container extends PureComponent {
  componentDidMount() {
    this.props.selectImage({
      image: this.props.profile.avatar,
    })
  }

  goBack = () =>
    () => this.props.navigation.navigate('Home')

  render() {
    return <Profile {...this.props} goBack={this.goBack()} />
  }
}

const mapStateToProps = ({
  sidebar: {
    attributes: profile,
  },
  api: {
    [apiCalls.PROFILE_UPDATE]: {
      status,
    },
  },
},
{
  intl,
  navigation,
}) => ({
  intl,
  profile,
  navigation,
  calling: status === apiStatuses.STARTED,
})

const mapDispatchToProps = dispatch => ({
  pressSave({ fields, navigation }) {
    dispatch(actions.pressSave({ fields, navigation }))
  },
  selectImage({ image }) {
    dispatch(selectImage({ image }))
  }
})

const ProfileContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default ProfileContainer
