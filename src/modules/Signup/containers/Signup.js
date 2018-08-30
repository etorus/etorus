import React, { PureComponent } from 'react'
import { Alert } from 'react-native'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from '../redux/actions'
// import { selectImage } from 'modules/Shared/redux/uploader/actions'

import Signup from '../components'

class Container extends PureComponent {
  // showAlertErrors = () => {
  //   const {
  //     message,
  //     error,
  //     intl: {
  //       formatMessage,
  //     },
  //     clearErrors,
  //   } = this.props

  //   if (error) {
  //     Alert.alert(
  //       formatMessage({ id: 'signup.errors.title' }),
  //       message,
  //       [
  //         {
  //           text: formatMessage({ id: 'signup.errors.button' }),
  //           onPress: clearErrors,
  //         },
  //       ],
  //     )
  //   }
  // }

  goToLogin = () =>
    () => this.props.navigation.navigate('Login')

  render() {
    // this.showAlertErrors()

    return <Signup {...this.props} goToLogin={this.goToLogin()} />
  }
}

const mapStateToProps = ({
  signup: {
    authToken,
  },
},
{
  intl,
  navigation,
}) => ({
  authToken,
  intl,
  navigation,
  validation: validation || {},
  facebook: navigation.state.params ? navigation.state.params.facebook : {},
})

const mapDispatchToProps = dispatch => ({
  pressSignup() {
    dispatch(actions.pressSignup())
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
