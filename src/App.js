import { YellowBox } from 'react-native'

// Waiting new version of React Native to remove this ignores.
// This warnings are from React Native API
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader requires',
  'Setting a timer',
])

import 'intl'
import pt from 'react-intl/locale-data/pt'
import { addLocaleData } from 'react-intl'
addLocaleData([...pt])

import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import { View, StatusBar } from 'react-native'

import notificationConfiguration from './notification'

import store from './store'
import * as locales from './locales'

import { getNormalizedLocale } from './moment'

import Navigation from './Navigation'

class App extends PureComponent {
  componentDidMount() {
    notificationConfiguration()
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider
          locale="en"
          messages={
            locales[getNormalizedLocale() ? getNormalizedLocale().i18n : 'en']
          }
        >
          <View style={{ flex: 1 }}>
            <StatusBar
              barStyle="light-content"
              animated
              translucent
              backgroundColor="rgba(0, 0, 0, 0)"
            />
            <Navigation />
          </View>
        </IntlProvider>
      </Provider>
    )
  }
}

export default App
