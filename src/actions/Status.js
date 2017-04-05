import api from './Api';
import {STATUS_URL} from './Api';

export function getStatus(day) {
  return {
    types: ['GET_STATUS', 'GET_STATUS_SUCCESS','GET_STATUS_FAILURE'],
    promise: api.get(`${STATUS_URL}/${day}`)
  }
}

