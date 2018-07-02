import { validate } from 'validate.js'

const constraints = formatMessage => ({
  name: {
    presence: {
      message: formatMessage({ id: 'shared.errors.cannot_be_blank'}, {
        field: formatMessage({ id: 'signup.form.name' })
      }),
    },
    length: {
      minimum: 1,
      message: formatMessage({ id: 'shared.errors.cannot_be_blank'}, {
        field: formatMessage({ id: 'signup.form.name' })
      }),
    },
  },

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

  password: {
    presence: {
      message: formatMessage({ id: 'shared.errors.cannot_be_blank'}, {
        field: formatMessage({ id: 'signup.form.password' })
      }),
    },
    length: {
      minimum: 8,
      message: formatMessage({ id: 'shared.errors.length'}, {
        field: formatMessage({ id: 'signup.form.password' }),
        length: 8,
      }),
    },
  },

  password_confirmation: {
    equality: {
      attribute: 'password',
      message: formatMessage({ id: 'shared.errors.equality'}, {
        field: formatMessage({ id: 'signup.form.password_confirmation' }),
        toEqual: formatMessage({ id: 'signup.form.password' }),
      }),
    },
  },
})

export default (fields, formatMessage) =>
  validate(fields, constraints(formatMessage))
