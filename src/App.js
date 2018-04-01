import 'intl'
import pt from 'react-intl/locale-data/pt';
import { addLocaleData } from 'react-intl';
addLocaleData([...pt]);

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
} from 'react-router-native'

import store from './store'
import * as locales from './locales';

import { Login, Splash } from './modules/Login'
import { PrivateRoute, Loading }  from './modules/Shared'

const getAuthToken = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(''), 200)
  });
}

const App = () =>
  <Provider store={store}>
    <IntlProvider locale="en" messages={locales['en']}>
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent
            barStyle="light-content"
            animated
          />

          <PrivateRoute exact path="/" component={Loading} getAuthToken={getAuthToken} />
          <Route path="/splash" component={Splash} />
          <Route path="/login" component={Login} />
        </View>
      </NativeRouter>
    </IntlProvider>
  </Provider>

export default App
