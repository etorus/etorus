import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Image,
  AsyncStorage,
} from 'react-native'

import style from './style'
import completeLogo from 'images/complete_logo.png'

class Loading extends PureComponent {
  constructor(props) {
    super(props)
    this.fetchAuthToken()
  }

  fetchAuthToken = async () => {
    const authToken = await AsyncStorage.getItem('@EtorusStorage::APIAuthToken')
    this.props.navigation.navigate(authToken ? 'App' : 'Auth')
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
