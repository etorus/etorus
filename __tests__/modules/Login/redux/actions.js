import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from 'modules/Login/redux/actions'
import * as constants from 'modules/Login/redux/constants'

const mockStore = configureMockStore([thunk])

describe('Login actions', () => {
  it('should create an action to change a value of an input', () => {
    const value = '1234'
    const name = 'foo'
    const expectedAction = {
      type: constants.CHANGE_INPUT,
      value,
      name,
    }

    expect(actions.changeInput({ value, name })).toEqual(expectedAction)
  })

  it('should create an action to start the calling of auth', () => {
    const expectedAction = {
      type: constants.AUTH_CALLING,
    }

    expect(actions.authCalling()).toEqual(expectedAction)
  })

  it('should create an action to end the fetching of auth', () => {
    const expectedAction = {
      type: constants.AUTH_RECEIVE,
    }

    expect(actions.authReceive()).toEqual(expectedAction)
  })

  it('should create an action to get the response of auth', () => {
    const authToken = '12345'
    const expectedAction = {
      type: constants.AUTH_SUCCESS,
      authToken,
    }

    expect(actions.authSuccess({ authToken })).toEqual(expectedAction)
  })

  it('should create an action to get the error', () => {
    const error = 1
    const message = 'message'
    const expectedAction = {
      type: constants.AUTH_ERROR,
      error,
      message,
    }

    expect(actions.authError({ error, message })).toEqual(expectedAction)
  })

  it('should fetch meditations endpoint and trigger the actions', () => {
    const data = { auth_token: '12345' }

    // TODO: Change the endpoint to an env variable
    fetchMock.postOnce(
      'https://etorus-staging.herokuapp.com/auth/login',
      {
        body: data,
        headers: {
          'content-type': 'application/json',
        }
      }
    )

    const expectedActions = [
      { type: constants.AUTH_CALLING },
      { type: constants.AUTH_RECEIVE },
      { type: constants.AUTH_ERROR, error: 0, message: '' },
      { type: constants.AUTH_SUCCESS, authToken: data.auth_token }
    ]

    const store = mockStore({ authToken: '' })

    return store.dispatch(actions.pressAccess({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
