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
      changeInput,
    } = this.props

    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      selectImage({ image: `file://${image.path}` })
      uploadImage({ options: image }, changeInput)
    })
  }

  render() {
    return <Uploader {...this.props } openPicker={this.openPicker} />
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
  form,
  name,
}) => ({
  intl,
  image,
  form,
  name,
  navigation,
})

const mapDispatchToProps = (dispatch, { form, name }) => ({
  selectImage({ image }) {
    dispatch(actions.selectImage({ image }))
  },
  uploadImage({ options }, onUpload) {
    dispatch(actions.uploadImage({ options }, onUpload))
  },
  changeInput(value) {
    dispatch(actions.changeInput({ form, name, value }))
  },
})

const UploaderContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Container)

export default UploaderContainer
