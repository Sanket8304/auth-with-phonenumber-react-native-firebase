import * as actionType from '../constants/actionType';

export function setAuth(data) {
  return dispatch => {
    return dispatch({type: actionType.LOGIN_AUTH, data});
  };
}
