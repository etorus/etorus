export default (reducers, state, action) => (
  reducers.reduce((nextState, reducer) => reducer(nextState, action), state)
)
