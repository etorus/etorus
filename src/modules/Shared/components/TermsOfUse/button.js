import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();
import * as S from './styled.js'

const Button = ({
    formatMessage,
    navigation,
    status = false,
    callBack = () => {}
}) => (
    <S.ButtonWrapper>
        <CheckBox
            onPress={() => navigation.navigate('TermsOfUse', { callBack, formatMessage })}
            center
            containerStyle={{ backgroundColor: null, borderWidth: 0 }}
            title={formatMessage({ id: 'signup.form.terms_of_use' })}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={status}
            textStyle={{ color: '#fff' }}
            uncheckedColor='#fff'
            checkedColor='#000'
        />
    </S.ButtonWrapper>
)

export default Button