import React, { PureComponent } from 'react'
import { Alert } from 'react-native'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'

import Form from '../components/Form'

class Container extends PureComponent {
  goToSignup = () =>
    () => this.props.navigation.navigate('Signup')

  goToPassword = () =>
    () => this.props.navigation.navigate('Password')

  showAlertErrors = () => {
    const {
      message,
      error,
      intl: {
        formatMessage,
      },
      clearErrors,
    } = this.props

    if (error) {
      Alert.alert(
        formatMessage({ id: 'login.errors.title' }),
        message,
        [
          {
            text: formatMessage({ id: 'login.errors.button' }),
            onPress: clearErrors,
          },
        ],
      )
    }
  }

  render() {
    this.showAlertErrors()

    return <Form {...this.props}
      goToSignup={this.goToSignup()}
      goToPassword={this.goToPassword()}
    />
  }
}

const mapStateToProps = ({
  login: {
    inputs,
    calling,
    authToken,
    message,
    error,
    validation,
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
  validation: validation || {},
})

const mapDispatchToProps = dispatch => ({
  changeInput({ name, value }) {
    dispatch(actions.changeInput({ name, value }))
  },
  pressAccess({ email, password, navigation, formatMessage }) {
    dispatch(actions.pressAccess({ email, password, navigation, formatMessage }))
  },
  pressFacebook() {
    dispatch(actions.pressFacebook())
  },
  clearErrors() {
    dispatch(actions.authError({ message: '', error: 0 }))
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
