import React, { PureComponent } from 'react'
import { Alert, AsyncStorage } from 'react-native'
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
  //       formatMessage({ id: 'login.errors.title' }),
  //       message,
  //       [
  //         {
  //           text: formatMessage({ id: 'login.errors.button' }),
  //           onPress: clearErrors,
  //         },
  //       ],
  //     )
  //   }
  // }

  saveToken = () => {
    const {
      authToken,
      calling,
      navigation,
    } = this.props

    console.log(calling, authToken)

    if (!authToken && calling) {
      return
    }

    return AsyncStorage.setItem('@EtorusStorage::APIAuthToken', authToken, () => 
      navigation.navigate('App')
    )
  }

  render() {
    this.saveToken()

    return <Form {...this.props}
      goToSignup={this.goToSignup()}
      goToPassword={this.goToPassword()}
    />
  }
}

const mapStateToProps = ({
  login: {
    calling,
    authToken,
  },
},
{
  intl,
  navigation,
}) => ({
  intl,
  navigation,
  calling,
  authToken,
})

const mapDispatchToProps = dispatch => ({
  pressAccess() {
    dispatch(actions.pressAccess())
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
