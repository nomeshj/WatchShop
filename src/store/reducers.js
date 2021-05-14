
import { combineReducers } from 'redux';
import data from '../data';
import * as ActionTypes from './actionTypes';
import actions from './actions';
import reducer1 from './reducer1';
const allReducers = combineReducers({
  users:data,
  cart1:[],
  //setCart : actions,
  reducer1 : reducer1
});
export default allReducers;


