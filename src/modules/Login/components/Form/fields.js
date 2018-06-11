export default intl => ([
  {
    name: 'email',
    placeholder: intl.formatMessage({ id: 'login.form.placeholder_email' }),
    keyboardType: 'email-address',
  },
  {
    name: 'password',
    placeholder: intl.formatMessage({ id: 'login.form.placeholder_password' }),
    secureTextEntry: true,
  },
])
