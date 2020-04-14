import React from 'react'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styled.js'

Icon.loadFont();

const TermsOfUse = ({
    navigation,
}) => {
    const { callBack, formatMessage } = navigation?.state?.params || {}

    return (
        <ScrollView
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column',
                margin: 20,
                paddingBottom: 80,
                backgroundColor: 'rgba(240, 240, 240, 1)'
            }}
        >
            <S.Title>{formatMessage({ id: 'signup.form.terms_of_use' })}</S.Title>
            <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum est ac leo porta, consectetur pellentesque leo auctor. Sed quis enim a sem pellentesque bibendum et quis nisi. Integer aliquam et lorem et porta. Maecenas quam urna, luctus nec mattis id, feugiat ac ligula. Morbi feugiat malesuada est sed laoreet. Donec placerat gravida accumsan. Suspendisse potenti. Cras cursus orci sed eros sollicitudin ultricies. Phasellus pellentesque mollis consequat. In scelerisque sed ipsum sit amet egestas. Phasellus vitae rutrum dui. Praesent consectetur pretium sapien, id faucibus dui eleifend at. Curabitur rhoncus rutrum dolor, ut efficitur urna eleifend in. Aliquam eget nisi mattis sapien ornare elementum.</S.Text>
            <S.Text>Quisque vitae sem a magna efficitur feugiat. Maecenas tristique nec felis eget consectetur. Donec quis nunc iaculis, pretium libero at, tempus diam. Etiam eu nisl id nibh commodo convallis vitae a ipsum. Pellentesque sit amet interdum tortor. Proin rutrum, mi et tempus auctor, diam dui tincidunt ante, vitae convallis lorem justo eget tortor. Maecenas pretium sollicitudin odio vel eleifend. Maecenas rhoncus scelerisque sodales. Duis efficitur accumsan euismod. Nulla eget venenatis ipsum. Etiam vestibulum, velit eget commodo rhoncus, leo nisl placerat justo, ut sodales est leo vel ante.</S.Text>
            <S.Text>Donec aliquet, sapien ut luctus ornare, est nunc elementum neque, in tincidunt sapien magna malesuada nulla. Suspendisse potenti. Donec vehicula nisl ac libero commodo viverra sit amet ut odio. Nullam urna nunc, volutpat vel maximus quis, luctus non magna. Vestibulum a nunc vel mi faucibus ullamcorper at id libero. Donec consectetur nibh vel orci sodales, vel viverra urna iaculis. Pellentesque accumsan lobortis quam, hendrerit pulvinar magna faucibus ut. Suspendisse non quam eget diam scelerisque consectetur in ut lacus. Nullam vitae magna lobortis, tempor urna sit amet, sodales mi. Nulla auctor enim in massa commodo, id iaculis dolor condimentum. Aliquam pellentesque commodo ligula, a lacinia mauris mollis eget. Etiam ut mi et leo volutpat bibendum. Aenean elementum purus ac dolor consequat, sed suscipit massa scelerisque. Sed at porttitor urna.</S.Text>
            <S.Text>In id sem interdum, laoreet elit ac, tempus dolor. Fusce gravida feugiat odio, quis sodales arcu vehicula vel. Quisque dapibus erat vitae augue imperdiet, eu lobortis mi laoreet. Suspendisse facilisis felis a ante tempor imperdiet. Etiam pulvinar pellentesque molestie. Vestibulum at fermentum nulla, at fringilla mauris. Proin mattis nisi sit amet lectus finibus, a rhoncus tellus laoreet. Proin vel laoreet lacus. Curabitur sed dapibus sem. Suspendisse sit amet neque gravida, ullamcorper tellus et, volutpat leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eu ex egestas nisi ullamcorper consectetur. Aliquam aliquam ante nisl, a interdum urna scelerisque nec. Integer turpis urna, sagittis at eros et, porta dictum tortor.</S.Text>
            <S.Text>Praesent in tellus rhoncus, congue lorem nec, consectetur nulla. Nunc convallis suscipit ante. Sed aliquam vestibulum neque vel tincidunt. Vivamus a nunc ipsum. Ut id elit neque. In ac posuere diam. Maecenas in ornare turpis. Etiam et mauris et justo volutpat dictum eu ac metus. Pellentesque lacinia, velit at accumsan fermentum, metus mauris porta neque, et aliquet tellus risus et erat. Sed porta lobortis blandit. Maecenas diam tellus, eleifend vitae massa ut, imperdiet condimentum felis. Etiam a semper dui, eget gravida felis. Curabitur hendrerit enim a velit volutpat venenatis. Phasellus interdum risus at lacus hendrerit egestas.</S.Text>
            <Button
                onPress={ () => {
                    callBack()
                    navigation.goBack()
                }}
                containerStyle={{
                    width: '100%',
                    marginTop: 15,
                }}
                title={formatMessage({ id: 'signup.form.terms_of_use.agreement' })}
            />
        </ScrollView>
    )
}

export default TermsOfUse