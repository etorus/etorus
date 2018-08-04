import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Input from '../components/Input'

import * as actions from '../redux/forms/actions'

const mapStateToProps = (_, ownProps) => ({ ...ownProps })

const mapDispatchToProps = (dispatch, { form }) => ({
  changeInput({ name, value }) {
    dispatch(actions.changeInput({ form, name, value }))
  },
})

const InputContainer = compose(
  injectIntl,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Input)

export default InputContainer
