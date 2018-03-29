import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native'

import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native'

import store from './store'
import en from './locales/en'

const Home = () =>
  <View>
    <Text>HOME</Text>
  </View>

const App = () =>
  <Provider store={store}>
    <IntlProvider locale="en" messages={en}>
      <NativeRouter>
        <Route exact path="/" component={Home} />
      </NativeRouter>
    </IntlProvider>
  </Provider>

export default App
