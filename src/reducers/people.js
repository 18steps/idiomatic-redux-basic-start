import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.people,
    };
  }
  return state;
};

const list = (state = [], action) => {
  if (action.response) {
    return [ ...state, ...action.response.result ];
  }
  return state;
};

const people = combineReducers({
  byId,
  list,
});

const getPersonById = (state, id) => state.byId[ id ];
const getPeople = (state) => state.list.map(id => state.byId[ id ]);

export default people;
export { getPersonById, getPeople };