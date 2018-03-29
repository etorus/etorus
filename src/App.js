import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import {
  StyleSheet,
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

import Loading from './modules/Shared/components/Loading'

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
})

const App = () =>
  <Provider store={store}>
    <IntlProvider locale="en" messages={en}>
      <NativeRouter>
        <View style={style.container}>
          <Route exact path="/" component={Loading} />
        </View>
      </NativeRouter>
    </IntlProvider>
  </Provider>

export default App
