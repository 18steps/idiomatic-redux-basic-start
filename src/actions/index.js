import * as api from '../api';
import * as schema from './schema';

import {
  FETCH_STARWARS_FAILURE,
  FETCH_STARWARS_REQUEST,
  FETCH_STARWARS_SUCCESS,
} from '../api/names';

import { normalize } from 'normalizr';


const fetchStarWars = (action) => (dispatch) => {
  dispatch({
    type: FETCH_STARWARS_REQUEST,
  });
  return api.fetchStarWars().then(
    response => dispatch({
      type: FETCH_STARWARS_SUCCESS,
      response: normalize(response, schema.people),
    }),
    error => dispatch({
      type: FETCH_STARWARS_FAILURE,
      message: error.message || 'Something went wrong.',
    }),
  );
};

export { fetchStarWars };