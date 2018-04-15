import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer';

import Loading from 'modules/Shared/components/Loading'

describe('', () => {
  it('renders a Loading correctly', () => {
    expect(renderer.create(<Loading />)).toMatchSnapshot();
  });
})
