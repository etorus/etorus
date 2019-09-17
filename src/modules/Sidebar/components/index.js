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
          email,
          facebook_id: facebookId,
        },
      },
      goToProfile,
      logout,
      onAddFacebook,
      onRemoveFacebook,
      intl: {
        formatMessage,
      },
      calling,
    } = this.props

    const toggleMessage = !facebookId
      ? formatMessage({ id: 'sidebar.connect_facebook' })
      : formatMessage({ id: 'sidebar.disconnect_facebook' })

    const toggleFacebook = !facebookId
      ? onAddFacebook
      : onRemoveFacebook

    return (
      <ScrollView>
        <SafeAreaView
          style={style.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >

          <View style={style.brandContainer}>
            <Image source={brand} resizeMode={'contain'} style={style.brand} />
          </View>

          <View style={style.header}>
            {
              avatar
                ? <Image source={{ uri: avatar }} resizeMode={'contain'} style={style.image} />
                : <ActivityIndicator size="small" color="#c64d96" />
            }

            <View>
              <Text style={style.name}>{ name }</Text>
              <Text style={style.email}>{ email }</Text>
            </View>
          </View>

          <View style={style.buttons}>
            <TouchableOpacity style={style.button} onPress={goToProfile}>
              <Text style={style.buttonText}>
                { formatMessage({ id: 'sidebar.edit_profile' }) }
              </Text>
            </TouchableOpacity>

            {
              calling
                ? (
                  <TouchableOpacity style={style.button} onPress={() => {}}>
                    <Text style={[style.buttonText, style.facebook]}>
                      { toggleMessage }
                    </Text>
                    <ActivityIndicator size="small" color="rgba(0, 133, 189, 1)" />
                  </TouchableOpacity>
                )
                : (
                  <TouchableOpacity style={style.button} onPress={toggleFacebook}>
                    <Text style={[style.buttonText, style.facebook]}>
                      { toggleMessage }
                    </Text>
                  </TouchableOpacity>
                )
            }

            <TouchableOpacity style={style.button} onPress={logout}>
              <Text style={[style.buttonText, style.alert]}>
                { formatMessage({ id: 'sidebar.logout' }) }
              </Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default Sidebar
