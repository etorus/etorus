import 'intl'

import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import {
  View,
  AppRegistry,
  StatusBar,
} from 'react-native'

import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native'

import store from './store'
import en from './locales/en'

import Splash from './modules/Login/components/Splash'

const App = () =>
  <Provider store={store}>
    <IntlProvider locale="en" messages={en}>
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent
            barStyle="light-content"
            animated
          />
          <Route exact path="/" component={Splash} />
        </View>
      </NativeRouter>
    </IntlProvider>
  </Provider>

export default App
