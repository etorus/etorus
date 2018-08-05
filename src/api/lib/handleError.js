export class ApiError extends Error {
  constructor({ message, ...rest }) {
    super(message)
    Object.assign(this, { name: 'ApiError', ...rest })
  }
}

export default error => {
  if (error.message === 'Invalid credentials') {
    throw new ApiError({
      source: 'Server',
      code: 1
    })
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new ApiError({
      source: 'unknown',
      message: 'Unknown Error'
    })
  }
}
