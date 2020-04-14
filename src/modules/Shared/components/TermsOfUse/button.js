import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();
import * as S from './styled.js'

const Button = ({
    navigation,
    status = false,
    callBack = () => {}
}) => {
    return (
        <S.ButtonWrapper>
            <CheckBox
                onPress={() => console.log('Press')}
                center
                containerStyle={{ backgroundColor: null, borderWidth: 0 }}
                title='Terms & Conditions'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={true}
                textStyle={{ color: '#fff' }}
                uncheckedColor='#fff'
                checkedColor='#000'
            />
        </S.ButtonWrapper>
    )
}

export default Button