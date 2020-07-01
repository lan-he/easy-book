import * as constants from './constants.js';

const changeSignInState = (data) => ({
	type: constants.CHANGE_SIGNIN_STATE,
	data: data
});
export const userLogOut = () => ({
	type: constants.USER_LOG_OUT,
});
export const getSignIn = () => {
  return (dispatch) => {
    dispatch(changeSignInState(true));
  };
};
