import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();
import * as S from './styled.js'

const TermsOfUse = ({

}) => {
    return (
        <S.Wrapper>
            <CheckBox
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
        </S.Wrapper>
    )
}

export default TermsOfUse