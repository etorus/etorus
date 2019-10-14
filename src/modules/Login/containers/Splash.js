import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk'

import React, { PureComponent } from 'react'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Splash from '../components/Splash'

class Container extends PureComponent {
  goLogin = () =>
    () =>  this.props.navigation.navigate('Login')

  goSignup = () =>
    () =>  this.props.navigation.navigate('Signup')

  goSignupFacebook = () => {
    const {
      navigation: {
        navigate,
      },
    } = this.props

    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      () => {
        return AccessToken.getCurrentAccessToken().then(
          data => {
            new GraphRequestManager().addRequest(
              new GraphRequest(
                `/${data.userID}`, {
                  parameters: {
                    fields: {
                      string: 'email,name,id,picture',
                    },
                  },
                },
                (_, data) => {
                  navigate('Signup', {
                    facebook: data,
                  })
                }
              )
            ).start();
          },
        )
      },
    )
  }

  render() {
    return <Splash {...this.props}
      goLogin={this.goLogin()}
      goSignup={this.goSignup()}
      goSignupFB={this.goSignupFacebook}
    />
  }
}

const mapStateToProps = (_, { navigation }) => ({ navigation })

const SplashContainer = compose(
  injectIntl,
  connect(mapStateToProps, null),
)(Container)

export default SplashContainer
