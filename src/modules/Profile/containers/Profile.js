import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'
import { selectImage } from 'modules/Shared/redux/uploader/actions'

import Profile from '../components'

class Container extends PureComponent {
  componentDidMount() {
    this.props.selectImage({
      image: this.props.profile.attributes.avatar,
    })
  }

  onPressSave = () => {
    const {
      pressSave,
      navigation,
      inputs: fields,
      profile
    } = this.props

    return () => pressSave({ fields, navigation })
  }

  goBack = () =>
    () => this.props.navigation.navigate('Home')

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
    dispatch(actions.changeInput({ name, value }))
  },
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
