import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeList = (data) => ({
	type: constants.CHANGE_HOME_LIST,
	data,
});
const splicingHomeList = (data) => ({
	type: constants.SPLIC_HOME_LIST,
	data: fromJS(data),
});
const showLoading = (data) => ({
	type: constants.SHOW_LOADING,
});
export const changeTopShow = (show) => ({
	type: constants.CHANGE_TOP_SHOW,
	show
});
export const getHomeArticleList = () => {
  return (dispatch) => {
    axios.get('/api/homeArticleList.json').then((res) => {
      const data = res.data;
      dispatch(changeHomeList(data));
    });
  };
};
export const getMoreList = () => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      axios.get('/api/homeMoreList.json').then((res) => {
        const data = res.data;
        dispatch(splicingHomeList(data));
      });
    },800)
    
  };
};
