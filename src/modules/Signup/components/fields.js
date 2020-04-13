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
  },
  {
    name: 'phone',
    placeholder: formatMessage({ id: 'signup.form.phone' }),
    keyboardType: 'phone-pad',
  },
  {
    name: 'age',
    placeholder: formatMessage({ id: 'signup.form.age' }),
  },
  {
    name: 'password',
    placeholder: formatMessage({ id: 'signup.form.password' }),
    secureTextEntry: true,
  },
  {
    name: 'password_confirmation',
    placeholder: formatMessage({ id: 'signup.form.password_confirmation' }),
    secureTextEntry: true,
  },
])
