import React, { PureComponent } from 'react'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Uploader from '../components/Uploader'

class Container extends PureComponent {

  render() {
    return <Uploader {...this.props} />
  }
}

const UploaderContainer = compose(
  injectIntl,
  connect(
    null,
    null,
  )
)(Container)

export default UploaderContainer
