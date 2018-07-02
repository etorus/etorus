import React, { PureComponent } from 'react'
import { Alert } from 'react-native'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'

import Signup from '../components'

class Container extends PureComponent {
  onPressSignup = () => {
    const {
      pressSignup,
      navigation,
      inputs: fields,
      intl: {
        formatMessage,
      },
    } = this.props

    return () => pressSignup({ fields, navigation, formatMessage })
  }

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
        formatMessage({ id: 'signup.errors.title' }),
        message,
        [
          {
            text: formatMessage({ id: 'signup.errors.button' }),
            onPress: clearErrors,
          },
        ],
      )
    }
  }

  goToLogin = () =>
    () => this.props.navigation.navigate('Login')

  render() {
    this.showAlertErrors()

    return <Signup {...this.props}
      onPressSignup={this.onPressSignup()}
      goToLogin={this.goToLogin()}
    />
  }
}

const mapStateToProps = ({
  signup: {
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
  pressSignup({ fields, navigation, formatMessage }) {
    dispatch(actions.pressSignup({ fields, navigation, formatMessage }))
  },
  clearErrors() {
    dispatch(actions.signupError({ error: 0, message: '' }))
  },
})

const SignupContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default SignupContainer
