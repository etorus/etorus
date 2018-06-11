import React, { PureComponent } from 'react'
import ImagePicker from 'react-native-image-crop-picker'

import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Uploader from '../components/Uploader'

import * as actions from '../redux/uploader/actions'

class Container extends PureComponent {
  openPicker = () => {
    const {
      selectImage,
      uploadImage,
      onUpload,
    } = this.props

    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      selectImage({ image: `file://${image.path}` })
      uploadImage({ options: image }, onUpload)
    })
  }

  render() {
    return <Uploader {...this.props}
      openPicker={this.openPicker}
    />
  }
}

const mapStateToProps = ({
  shared: {
    uploader: {
      image,
    }
  }
},
{
  intl,
  navigation,
  onUpload,
}) => ({
  image,
  intl,
  navigation,
  onUpload,
})

const mapDispatchToProps = dispatch => ({
  selectImage({ image }) {
    dispatch(actions.selectImage({ image }))
  },
  uploadImage({ options }, onUpload) {
    dispatch(actions.uploadImage({ options }, onUpload))
  }
})

const UploaderContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default UploaderContainer
