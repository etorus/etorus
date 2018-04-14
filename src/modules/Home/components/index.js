import React, { PureComponent } from 'react'
import {
  View,
  Text
} from 'react-native'

import Header from './Header'

class Home extends PureComponent {
  render() {
    return (
      <View>
        <Header />
      </View>
    )
  }
}

export default Home
