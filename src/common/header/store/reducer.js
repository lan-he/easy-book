import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  showHeader: true,
  focused: false,
  mouseIn: false,
  labelList: [],
  page: 1,
  totalPage: 1,
  nightPattern: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.merge({
        labelList: action.data,
        totalPage: action.totalPage,
      });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page',action.page);
    case constants.ON_NIGHT_PATTERN:
      return state.set('nightPattern', true);
    case constants.OFF_NIGHT_PATTERN:
      return state.set('nightPattern', false);
    default:
      return state;
  }
}