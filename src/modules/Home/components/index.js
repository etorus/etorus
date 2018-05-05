import React, { PureComponent } from 'react'
import {
  View,
  ActivityIndicator,
  TouchableHighlight,
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
    } = this.props

    return (
      <View style={style.home}>
        <Header />
        <Filters />
        <View>
          {
            calling
              ? <ActivityIndicator size="small" color="#c64d96" />
              : meditations.map(item => (
                <TouchableHighlight
                  onPress={this.go(item.id)}
                  key={item.id}
                  style={style.item}
                >
                  <MeditationCard meditation={item} />
                </TouchableHighlight>
              ))
          }
        </View>
      </View>
    )
  }
}

export default Home
