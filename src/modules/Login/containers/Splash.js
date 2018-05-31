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

  render() {
    return <Splash {...this.props}
      goLogin={this.goLogin()}
      goSignup={this.goSignup()}
    />
  }
}

const mapStateToProps = (_, { navigation }) => ({ navigation })

const SplashContainer = compose(
  injectIntl,
  connect(mapStateToProps, null),
)(Container)

export default SplashContainer
