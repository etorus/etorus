import { injectIntl } from 'react-intl'
import { connect  } from 'react-redux'

import { changeInput, pressAccess, pressFacebook } from '../redux/actions'

import Form from '../components/Form'

const mapStateToProps = ({
  login: {
    inputs,
    calling,
    authToken,
    message,
    error,
  },
},
{
  intl,
}) => ({
  intl,
  inputs,
  calling,
  authToken,
  message,
  error,
})

const mapDispatchToProps = dispatch => ({
  changeInput({ name, value }) {
    dispatch(changeInput({ name, value }))
  },
  pressAccess({ email, password }) {
    dispatch(pressAccess({ email, password }))
  },
  pressFacebook() {
    dispatch(pressFacebook())
  },
})

const InjectedIntlForm = injectIntl(Form)

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InjectedIntlForm)

export default FormContainer
