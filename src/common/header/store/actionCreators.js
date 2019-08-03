import * as constants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});
export const changePageList = (page) => ({
	type: constants.CHANGE_PAGE,
	page: page
});
export const getLabelList = () => {
  return (dispatch) => {
    axios.get('/api/headerLabelList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data));
    });
  };
};
