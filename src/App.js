import { YellowBox } from 'react-native'

// Waiting new version of React Native to remove this ignores.
// This warnings are from React Native API
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires',
])

import 'intl'
import pt from 'react-intl/locale-data/pt'
import { addLocaleData } from 'react-intl'
addLocaleData([...pt])

import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import { View, AppRegistry, StatusBar } from 'react-native'

import notificationConfiguration from './notification'

import store from './store'
import * as locales from './locales'

import Navigation from './Navigation'

class App extends PureComponent {
  componentDidMount() {
    notificationConfiguration()
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en" messages={locales['pt']}>
          <View style={{ flex: 1 }}>
            <StatusBar
              barStyle="light-content"
              animated
              backgroundColor="#c64d96"
            />
            <Navigation />
          </View>
        </IntlProvider>
      </Provider>
    )
  }
}

export default App
