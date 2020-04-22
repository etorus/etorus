import React, { PureComponent } from 'react'
import ImagePicker from 'react-native-image-crop-picker'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import UseConditions from '../components/UseConditions'

class Container extends PureComponent {

  render() {
    return <UseConditions {...this.props} />
  }
}

const mapStateToProps = ({},
{
  intl,
  navigation,
}) => ({
  intl,
  navigation,
})

const mapDispatchToProps = dispatch => ({})

const UseConditionsContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default UseConditionsContainer
