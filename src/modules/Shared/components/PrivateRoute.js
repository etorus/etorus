import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-native'

import Loading from './Loading'

class PrivateRoute extends PureComponent {
  state = {
    authToken: null,
    authTokenCalled: false,
  }

  async componentDidMount() {
    const authToken = await this.props.getAuthToken()

    this.setState({
      authToken: authToken,
      authTokenCalled: true,
    })
  }

  render() {
    const {
      component: Component,
      path,
      ...rest,
    } = this.props

    if (this.state.authToken && this.state.authTokenCalled) {
      return <Component {...this.props} />
    } else if (!this.state.authToken && this.state.authTokenCalled) {
      return <Redirect to={{ pathname: '/login' }} />
    }

    return path === '/' ? <Loading /> : null
  }
}

export default PrivateRoute
