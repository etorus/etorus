import React from 'react'
import { Dimensions } from 'react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './modules/Home'
import Session from './modules/Session'
import Signup from './modules/Signup'
import { Login, Splash } from './modules/Login'
import { Loading, TermsOfUse, UseConditions, Exercises }  from './modules/Shared'
import Sidebar from './modules/Sidebar'
import Profile from './modules/Profile'
import Password from './modules/Password'

const AppStack = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Session: {
    screen: Session,
  },
  Profile: {
    screen: Profile,
  },
  Exercises: {
    screen: Exercises
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
  TermsOfUse: {
    screen: TermsOfUse,
  },
  UseConditions: {
    screen: UseConditions
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  Password: {
    screen: Password,
  },
},
{
  headerMode: 'none',
})

const Navigation = createSwitchNavigator({
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

export default createAppContainer(Navigation)
