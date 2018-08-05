import React, { PureComponent } from 'react'
import {
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native'

import style from './style'

import Header from './Header'
import MeditationCard from './MeditationCard'

class Home extends PureComponent {
  render() {
    const {
      go,
      intl,
      calling,
      pressMenu,
      filteredMeditation,
    } = this.props

    const data = filteredMeditation.map(
      meditation => ({ ...meditation, key: meditation.id })
    )

    return (
      <View style={style.home}>
        <Header onPressMenu={pressMenu} />

        <View>
          {
            calling
              ? <ActivityIndicator size="small" color="#c64d96" />
              : <FlatList
                data={data}
                renderItem={
                  ({ item }) =>
                    <MeditationCard meditation={item} go={go(item)} intl={intl} />
                }
              />
          }
        </View>
      </View>
    )
  }
}

export default Home
