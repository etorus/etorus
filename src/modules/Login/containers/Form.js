import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {
  changeInput,
  pressAccess,
  pressFacebook,
} from '../redux/actions'

import Form from '../components/Form'

class Container extends PureComponent {
  goToSignup = () =>
    () => this.props.navigation.navigate('Signup')

  render() {
    return <Form {...this.props} goToSignup={this.goToSignup()}/>
  }
}

const mapStateToProps = ({
  login: {
    inputs,
    calling,
    authToken,
    message,
    error,
  },
},
{
  intl,
  navigation,
}) => ({
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
  pressAccess({ email, password, navigation }) {
    dispatch(pressAccess({ email, password, navigation }))
  },
  pressFacebook() {
    dispatch(pressFacebook())
  },
})

const FormContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default FormContainer
