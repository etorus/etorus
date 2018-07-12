import { validate } from 'validate.js'

const constraints = formatMessage => ({
  email: {
    presence: {
      message: formatMessage({ id: 'shared.errors.cannot_be_blank'}, {
        field: formatMessage({ id: 'signup.form.email' })
      }),
    },
    length: {
      minimum: 1,
      message: formatMessage({ id: 'shared.errors.cannot_be_blank'}, {
        field: formatMessage({ id: 'signup.form.email' })
      }),
    },
    email: {
      message: formatMessage({ id: 'shared.errors.valid_email'}, {
        field: formatMessage({ id: 'signup.form.email' })
      }),
    },
  },
})

export default (fields, formatMessage) =>
  validate(fields, constraints(formatMessage))
