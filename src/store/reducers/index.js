import { combineReducers } from 'redux';

import students from './students';
import classes from './classes';

export default combineReducers({ students, classes });