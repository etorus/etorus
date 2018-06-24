import { validate } from 'validate.js'

const constraints = {
  email: {
    presence: {
      message: 'Email não pode estar vazio para efetuar o login',
    },
    email: {
      message: 'Email deve ser um e-mail válido',
    },
  },

  password: {
    presence: {
      message: 'Senha não pode estar vazia para efetuar o login',
    },
  },
}

export default fields => validate(fields, constraints)
