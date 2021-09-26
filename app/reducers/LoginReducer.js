/*
  @file: Login Reducer
  @purpose: handle verify mobile number and otp
  @author: Sanket Patel
  @created: Jul 2021
*/

import * as actionType from '../constants/actionType';

const initialState = {
  auth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_AUTH:
      return {
        ...state,
        auth: action.data,
      };

    default:
      return state;
  }
};
