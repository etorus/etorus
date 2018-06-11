import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import style from './style'

import brand from 'images/complete_logo.png'

class Sidebar extends PureComponent {
  render() {
    const {
      profile: {
        attributes: {
          avatar,
          name,
          email
        },
      },
      goToProfile,
    } = this.props

    return (
      <ScrollView>
        <SafeAreaView
          style={style.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >

          <View style={style.brandContainer}>
            <Image source={brand} style={style.brand} />
          </View>

          <View style={style.header}>
            {
              avatar
                ? <Image source={{ uri: avatar }} style={style.image} />
                : <ActivityIndicator size="small" color="#c64d96" />
            }

            <View>
              <Text style={style.name}>{ name }</Text>
              <Text style={style.email}>{ email }</Text>
            </View>
          </View>

          <View style={style.buttons}>
            <TouchableOpacity style={style.button} onPress={goToProfile}>
              <Text style={style.buttonText}>Editar perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}>
              <Text style={[style.buttonText, style.alert]}>Sair</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default Sidebar
