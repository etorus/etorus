import 'intl'
import pt from 'react-intl/locale-data/pt'
import { addLocaleData } from 'react-intl'
addLocaleData([...pt])

import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import {
  View,
  AppRegistry,
  StatusBar,
} from 'react-native'

import {
  StackNavigator,
  SwitchNavigator,
} from 'react-navigation'

import { getAuthToken } from './requests/base'

import store from './store'
import * as locales from './locales'

import Home from './modules/Home'
import Session from './modules/Session'
import { Login, Splash } from './modules/Login'
import { Loading }  from './modules/Shared'

const AppStack = StackNavigator(
  {
    Home,
    Session,
  },
  {
    headerMode: 'none',
  }
)

const AuthStack = StackNavigator(
  {
    Login,
    Splash,
  },
  {
    headerMode: 'none',
  }
)

const Navigation = SwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

const App = () =>
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

export default App
