import axios from 'axios';
import {
  FETCH_HOMES
 } from './types';

export const fetchHomes = () => async dispatch => {
  const res = await axios.get('/api/data');
  dispatch({ type: FETCH_HOMES, payload: res.data });
}