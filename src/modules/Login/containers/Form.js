import { injectIntl } from 'react-intl'
import { connect  } from 'react-redux'

import { changeInput, pressAccess } from '../redux/actions'

import Form from '../components/Form'

const mapStateToProps = ({
  login: {
    inputs,
    calling,
    authToken,
  },
},
{
  intl,
}) => ({
  intl,
  inputs,
  calling,
  authToken,
})

const mapDispatchToProps = dispatch => ({
  changeInput({ name, value }) {
    dispatch(changeInput({ name, value }))
  },
  pressAccess({ email, password }) {
    dispatch(pressAccess({ email, password }))
  },
})

const InjectedIntlForm = injectIntl(Form)

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InjectedIntlForm)

export default FormContainer
