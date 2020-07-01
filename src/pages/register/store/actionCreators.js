import * as constants from './constants.js'
import axios from 'axios'

const changeSignInState = (data) => ({
  type: constants.CHANGE_SIGNIN_STATE,
  data: data,
})
export const userLogOut = () => ({
  type: constants.USER_LOG_OUT,
})
export const getSignIn = () => {
  return (dispatch) => {
    dispatch(changeSignInState(true))
  }
}

export const registered = (userInfo) => {
  return () => {
    axios.post('/users/register', userInfo).then((res) => {
      console.log(res)
    })
  }
}
