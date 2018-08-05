import * as constants from './constants'

const initial = {
  image: null
}

export default (
  state = initial,
  {
    type,
    image,
  }
) => {
  switch (type) {
    case constants.SELECT_IMAGE:
      return { ...state, image }

    default:
      return state
  }
}
