import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'
import Password from '../components'

class Container extends PureComponent {
  goBack = () =>
    () => this.props.navigation.navigate('Login')

  onPressSend = () => {
    const {
      pressSend,
      navigation,
      inputs: fields,
      intl: {
        formatMessage,
      },
    } = this.props

    return () => pressSend({ fields, navigation, formatMessage })
  }
  
  render() {
    return <Password {...this.props}
      goBack={this.goBack()}
      onPressSend={this.onPressSend()}
    />
  }
}

const mapStateToProps = ({
  password: {
    error,
    inputs,
    calling,
    message,
    validation,
  },
},
{
  intl,
  navigation,
}) => ({
  intl,
  error,
  inputs,
  calling,
  message,
  validation,
  navigation,
})

const mapDispatchToProps = dispatch => ({
  changeInput(args) {
    dispatch(actions.changeInput(args))
  },
  pressSend(args) {
    dispatch(actions.pressSend(args))
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
