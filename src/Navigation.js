import React from 'react'
import { Dimensions } from 'react-native'

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation'

import Home from './modules/Home'
import Session from './modules/Session'
import Signup from './modules/Signup'
import { Login, Splash } from './modules/Login'
import { Loading }  from './modules/Shared'
import Sidebar  from './modules/Sidebar'

const AppStack = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Session: {
    screen: Session,
  },
},
{
  drawerWidth: Dimensions.get('screen').width - 50,
  contentComponent: Sidebar,
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
