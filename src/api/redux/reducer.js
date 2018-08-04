import { apiCalls, apiStatuses, actions } from './constants';

const initialState = Object.keys(apiCalls).reduce((statuses, key) => {
  statuses[key] = { status: apiStatuses.NOT_STARTED, error: {}};
  return statuses;
}, {});

const update = (state, { key, status, payload = {}}) => {
  const newStatus = {
    [key]: {
      status,
      error: status === apiStatuses.FAIL ? payload : {}
    }
  };
  return { ...state, ...newStatus };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.API_STATUS_CHANGE:
      return update(state, payload);
    default:
      return state;
  }
};
