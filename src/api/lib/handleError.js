export class ApiError extends Error {
  constructor({ message, ...rest }) {
    super(message)
    Object.assign(this, { name: 'ApiError', ...rest })
  }
}

export default (error) => {
  if (error.response) {
    // Server-side error
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw new ApiError({
      source: 'server',
      ...error.response.data
    })
  } else if (error.request) {
    // Client-side error
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw new ApiError({
      source: 'client',
      message: 'Network Error'
    })
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new ApiError({
      source: 'unknown',
      message: 'Unknown Error'
    })
  }
}
