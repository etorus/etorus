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
    editable: false,
  },
  {
    name: 'phone',
    placeholder: intl.formatMessage({ id: 'signup.form.phone' }),
    keyboardType: 'phone-pad',
  },
])
