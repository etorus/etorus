export default intl => ([
  {
    name: 'name',
    placeholder: intl.formatMessage({ id: 'signup.form.name' }),
    autoCapitalize: 'sentences',
  },
  {
    name: 'email',
    placeholder: intl.formatMessage({ id: 'signup.form.email' }),
    keyboardType: 'email-address',
  },
  {
    name: 'phone',
    placeholder: intl.formatMessage({ id: 'signup.form.phone' }),
    keyboardType: 'phone-pad',
  },
  {
    name: 'password',
    placeholder: intl.formatMessage({ id: 'signup.form.password' }),
    secureTextEntry: true,
  },
  {
    name: 'password_confirmation',
    placeholder: intl.formatMessage({ id: 'signup.form.password_confirmation' }),
    secureTextEntry: true,
  },
])
