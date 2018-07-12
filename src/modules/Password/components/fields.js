export default formatMessage => ([
  {
    name: 'email',
    placeholder: formatMessage({ id: 'signup.form.email' }),
    keyboardType: 'email-address',
  },
])
