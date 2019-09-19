import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from 'modules/Home/redux/actions'
import * as constants from 'modules/Home/redux/constants'

const mockStore = configureMockStore([thunk])

describe('Home actions', () => {
  it('should create an action to start the calling of meditations', () => {
    const expectedAction = {
      type: constants.MEDITATION_CALLING,
    }

    expect(actions.meditationCalling()).toEqual(expectedAction)
  })

  it('should create an action to end the fetching of meditations', () => {
    const expectedAction = {
      type: constants.MEDITATION_RECEIVE,
    }

    expect(actions.meditationReceive()).toEqual(expectedAction)
  })

  it('should create an action to get the response of meditations', () => {
    const meditations = []
    const expectedAction = {
      type: constants.MEDITATION_SUCCESS,
      meditations
    }

    expect(actions.meditationSuccess({ meditations })).toEqual(expectedAction)
  })

  it('should create an action to get the error', () => {
    const error = 1
    const message = 'message'
    const expectedAction = {
      type: constants.MEDITATION_ERROR,
      error,
      message,
    }

    expect(actions.meditationError({ error, message })).toEqual(expectedAction)
  })

  it('should create an action to open notifications', () => {
    const expectedAction = {
      type: constants.OPEN_NOTIFICATIONS,
    }

    expect(actions.openNotifications()).toEqual(expectedAction)
  })

  it('should create an action to close notifications', () => {
    const expectedAction = {
      type: constants.CLOSE_NOTIFICATIONS,
    }

    expect(actions.closeNotifications()).toEqual(expectedAction)
  })

  it('should create an action to change the filter to started', () => {
    const expectedAction = {
      type: constants.FILTER_STARTED,
    }

    expect(actions.filterStarted()).toEqual(expectedAction)
  })

  it('should create an action to change the filter to next', () => {
    const expectedAction = {
      type: constants.FILTER_NEXT,
    }

    expect(actions.filterNext()).toEqual(expectedAction)
  })

  it('should create an action to open menu', () => {
    const expectedAction = {
      type: constants.OPEN_MENU,
    }

    expect(actions.openMenu()).toEqual(expectedAction)
  })

  it('should create an action to close menu', () => {
    const expectedAction = {
      type: constants.CLOSE_MENU,
    }

    expect(actions.closeMenu()).toEqual(expectedAction)
  })
})
