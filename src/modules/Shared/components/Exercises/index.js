import React, { useEffect, useState} from 'react'

import { default as List } from './List'
import Header from 'modules/Home/components/Header'
import { getExerciseListKey } from 'modules/Shared/components/Exercises/Helpers/index.js'
import * as S from './style'

const Exercises = ({
    navigation
}) => {
    if (navigation?.state?.params?.formatMessage === undefined) {
        return null
    } else {
        return <S.Exercises>
            <Header onPressMenu={() => navigation.goBack()} />
            <List list={getExerciseListKey()} fm={navigation?.state?.params?.formatMessage} />
        </S.Exercises>
    }


}

export default Exercises