import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import style from './style'
import completeLogo from 'images/complete_logo.png'

class Loading extends PureComponent {
  constructor(props) {
    super(props)
    this.fetchAuthToken()
  }

  fetchAuthToken = async () => {
    const { navigation: { navigate }} = this.props
    const authToken = await AsyncStorage.getItem('@EtorusStorage::APIAuthToken')
    const noteAdvise = await AsyncStorage.getItem('@EtorusStorage::NotesAdvise')

    if (!noteAdvise) return navigate('UseConditions')
    navigate(authToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image source={completeLogo} resizeMode={'contain'} style={style.brand} />
        </View>
        <Text style={style.version}>
          Version 1.0.0
        </Text>
      </View>
    )
  }
}

export default Loading
