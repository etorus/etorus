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
  componentDidMount() {
    this.props.fetch({ navigation: this.props.navigation })
  }

  go = id =>
    () => this.props.navigation.navigate('Session', { sessionId: id })

  render() {
    const {
      meditations,
      calling,
      navigation,
      filteredMeditation,
      intl,
    } = this.props

    const data = filteredMeditation.map(
      meditation => ({ ...meditation, key: meditation.id })
    )

    return (
      <View style={style.home}>
        <Header />
        <Filters intl={intl} />
        <View>
          {
            calling
              ? <ActivityIndicator size="small" color="#c64d96" />
              : <FlatList
                data={data}
                renderItem={
                  ({ item }) =>
                    <MeditationCard meditation={item} go={this.go} intl={intl} />
                }
              />
          }
        </View>
      </View>
    )
  }
}

export default Home
