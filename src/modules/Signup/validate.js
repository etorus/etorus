import { validate } from 'validate.js'

import moment from 'moment'

validate.extend(validate.validators.datetime, {
  // The value is guaranteed not to be null or undefined but otherwise it
  // could be anything.
  parse: function(value, options) {
    return +moment.utc(value);
  },
  // Input is a unix timestamp
  format: function(value, options) {
    var format = "YYYY/MM/DD";
    return moment.utc(value).format(format);
  }
});

const constraints = formatMessage => ({
  age: {
    presence: {
      message: formatMessage({ id: 'shared.errors.cannot_be_blank'}, {
        field: formatMessage({ id: 'signup.form.age' })
      }),
    },
    datetime: {
      dateOnly: true,
      latest: moment.utc().subtract(18, 'years'),
      message: formatMessage({ id: 'shared.errors.younger_age'})
    }
  },

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
