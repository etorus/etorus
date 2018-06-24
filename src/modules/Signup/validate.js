import { validate } from 'validate.js'

const constraints = {
  name: {
    presence: {
      message: 'Nome é necessário para criar sua conta',
    },
    length: {
      minimum: 1,
      message: 'Nome não pode estar vazio',
    },
  },

  email: {
    presence: {
      message: 'Email é necessário para criar sua conta',
    },
    length: {
      minimum: 1,
      message: 'Email não pode estar vazio',
    },
    email: {
      message: 'Email deve ser um e-mail válido',
    },
  },

  password: {
    presence: {
      message: 'Senha é necessário para criar sua conta',
    },
    length: {
      minimum: 8,
      message: 'Sua senha deve conter no mínimo 8 caracteres',
    },
  },

  password_confirmation: {
    equality: {
      attribute: 'password',
      message: 'Senha de confirmação deve ser igual a sua senha',
    },
  },
}

export default fields => validate(fields, constraints)
