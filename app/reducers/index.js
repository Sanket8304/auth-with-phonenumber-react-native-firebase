import {combineReducers} from 'redux';
import {LOGOUT} from '../constants/actionType';
import LoginReducer from './LoginReducer';

const appReducer = combineReducers({
  login: LoginReducer,
});

const rootReducer = (state, action) => {
  // on logout reset the state by setting state to undefined
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
