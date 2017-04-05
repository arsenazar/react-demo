import Immutable from 'immutable'

const options = {
  loaded: false,
  statusList: [],
  err: null,
};

let defaultState = new Immutable.Map(options);

export default function statusReducer(state = defaultState, action) {
  let statusList = state.get('statusList');

  switch (action.type) {

    case 'GET_STATUS':
      return state.set('loading', true);
    case 'GET_STATUS_SUCCESS':
      statusList = action.res.data;
      return state.set('loading', false)
        .set('loaded', true)
        .set('statusList', statusList);
    case 'GET_STATUS_FAILURE':
      return state.set('err', action.err);

    default:
      return state;
  }
}
