import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient'

import { LoadingButton } from 'modules/Shared'
import * as S from './style'

import logo from 'images/logo_horizontal_white.png'

const style = StyleSheet.create({
  filterBackground: {
    paddingTop: '25%',
    borderRadius: 15,
    flexDirection:'column',
    alignItems: 'center'
  },
})

const UseConditions = ({
  navigation: {
    navigate
  },
  intl: {
    formatMessage
  }
}) => {
  const handleConfirmation = () => {
    AsyncStorage.setItem('@EtorusStorage::NotesAdvise', 'true')
    navigate('AuthLoading')
  }

  return (
    <S.Wrapper>
        <LinearGradient
            style={[ StyleSheet.absoluteFill, style.filterBackground ]}
            colors={['#b834bc', '#fdaa04']}
            start={{ x: 0.5, y: 0.1 }} end={{ x: 0.8, y: 1.0 }}
        >

            <Image source={logo} resizeMode={'contain'} />
            
            <S.Title>{ formatMessage({ id: 'use_conditions.title' }) }</S.Title>

            <S.TextWrapper>
                <S.SubTitle>{ formatMessage({ id: 'use_conditions.subTitle' }) }</S.SubTitle>

                <S.TextBox>
                  <S.Text>• { formatMessage({ id: 'use_conditions.age' }) }</S.Text>
                  <S.Text>•{ formatMessage({ id: 'use_conditions.health' }) }</S.Text>
                </S.TextBox>
            </S.TextWrapper>

            <LoadingButton
              customText={{ fontSize: 20 }}
              customWrapper={{ marginTop: 'auto', marginBottom: 'auto'}}
              onPress={() => handleConfirmation()}
              label={formatMessage({ id: 'app.continue'})}
            />
        </LinearGradient>
    </S.Wrapper>
  )
}

export default UseConditions