import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'
import Password from '../components'

import { apiCalls, apiStatuses } from 'api'

class Container extends PureComponent {
  goBack = () =>
    () => this.props.navigation.navigate('Login')

  render() {
    return <Password {...this.props} goBack={this.goBack()} />
  }
}

const mapStateToProps = ({
  api: {
    [apiCalls.PASSWORD_RESET]: {
      status,
    },
  },
},
{
  intl,
  navigation,
}) => ({
  intl,
  navigation,
  calling: status === apiStatuses.STARTED,
})

const mapDispatchToProps = dispatch => ({
  pressSend() {
    dispatch(actions.pressSend())
  },
})

const PasswordContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default PasswordContainer
