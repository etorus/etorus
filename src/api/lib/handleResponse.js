import { ApiError } from './handleError'

export default async response => {
  const data = await response.json()

  if (response.ok) {
    return data
  }

  throw new ApiError({
    source: 'server',
    ...data 
  })
}