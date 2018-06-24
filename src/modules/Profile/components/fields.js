export default formatMessage => ([
  {
    name: 'name',
    placeholder: formatMessage({ id: 'signup.form.name' }),
    autoCapitalize: 'sentences',
  },
  {
    name: 'email',
    placeholder: formatMessage({ id: 'signup.form.email' }),
    keyboardType: 'email-address',
    editable: false,
  },
  {
    name: 'phone',
    placeholder: formatMessage({ id: 'signup.form.phone' }),
    keyboardType: 'phone-pad',
  },
])
