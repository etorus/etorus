import React, { PureComponent } from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native'

import style from './style'

import Header from './Header'
import Filters from './Filters'
import MeditationCard from './MeditationCard'

class Home extends PureComponent {
  go = meditation =>
    () => this.props.navigation.navigate('Session', {
      sessionId: meditation.id,
      meditation,
    })

  render() {
    const {
      meditations,
      calling,
      navigation,
      filteredMeditation,
      intl,
      pressMenu,
    } = this.props

    const onPressMenu = () =>
      () => pressMenu({ navigation })

    const data = filteredMeditation.map(
      meditation => ({ ...meditation, key: meditation.id })
    )

    return (
      <View style={style.home}>
        <Header onPressMenu={onPressMenu()} />

        <View>
          {
            calling
              ? <ActivityIndicator size="small" color="#c64d96" />
              : <FlatList
                data={data}
                renderItem={
                  ({ item }) =>
                    <MeditationCard meditation={item} go={this.go(item)} intl={intl} />
                }
              />
          }
        </View>
      </View>
    )
  }
}

export default Home
