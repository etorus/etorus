import React, { PureComponent } from 'react'
import { View, ActivityIndicator } from 'react-native'

import style from './style'

import Header from './Header'
import Filters from './Filters'
import MeditationCard from './MeditationCard'

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetch({ navigation: this.props.navigation })
  }

  render() {
    const {
      meditations,
      calling,
    } = this.props

    return (
      <View style={style.home}>
        <Header />
        <Filters />
        <View>
          {
            calling
              ? <ActivityIndicator size="small" color="#c64d96" />
              : meditations.map(item => <MeditationCard meditation={item} key={item.id}/>)
          }
        </View>
      </View>
    )
  }
}

export default Home
