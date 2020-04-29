import React, { useEffect, useState} from 'react'
import * as S from './style'

const List = ({ list, fm }) => {
    const [ isTitle, setTitle ] = useState(false)

    useEffect(() => {
        if (list[0].includes('number_0')) {
            setTitle(list.shift())
        }
    }, [])

    return <S.Wrapper>
        { isTitle && <S.Title>{ fm({ id: isTitle }) }</S.Title> }
        { list.map(key => <S.Text key={key}>• { fm({ id: key }) }</S.Text>) }
    </S.Wrapper>

}

export default List