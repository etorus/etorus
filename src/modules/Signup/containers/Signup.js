import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {
  changeInput,
  pressSignup,
} from '../redux/actions'

import Signup from '../components'

class Container extends PureComponent {
  onPressSignup = () => {
    const {
      pressSignup,
      navigation,
      inputs: fields,
    } = this.props

    return () => pressSignup({ fields, navigation })
  }

  goToLogin = () =>
    () => this.props.navigation.navigate('Login')

  render() {
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
  pressSignup({ fields, navigation }) {
    dispatch(pressSignup({ fields, navigation }))
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
