export default formatMessage => ([
  {
    name: 'email',
    placeholder: formatMessage({ id: 'login.form.placeholder_email' }),
    keyboardType: 'email-address',
  },
  {
    name: 'password',
    placeholder: formatMessage({ id: 'login.form.placeholder_password' }),
    secureTextEntry: true,
  },
])
