import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  whetherSignIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_SIGNIN_STATE:
      return state.set('whetherSignIn', action.data);
    case constants.USER_LOG_OUT:
      return state.set('whetherSignIn', false);
    default:
      return state;
  }
}