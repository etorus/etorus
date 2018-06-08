import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  SafeAreaView,
} from 'react-navigation'

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Text>TESTANDO</Text>
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


import Home from './modules/Home'
import Session from './modules/Session'
import Signup from './modules/Signup'
import { Login, Splash } from './modules/Login'
import { Loading }  from './modules/Shared'

const AppStack = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Session: {
    screen: Session,
  },
},
{
  drawerWidth: 300,
  contentComponent: CustomDrawerContentComponent
})

const AuthStack = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
},
{
  headerMode: 'none',
})

export default createSwitchNavigator({
  AuthLoading: {
    screen: Loading,
  },
  App: {
    screen: AppStack,
  },
  Auth: {
    screen: AuthStack,
  },
},
{
  initialRouteName: 'AuthLoading',
})
