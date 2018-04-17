import { combineReducers } from 'redux';
import people, * as fromPeople from './people';


const app = combineReducers({
  people,
});

const getPersonById = (state, id) => fromPeople.getPersonById(state.people, id);
const getPeople = (state) => fromPeople.getPeople(state.people);

export default app;
export {
  getPersonById,
  getPeople,
};