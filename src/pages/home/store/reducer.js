import * as constants from './constants.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  homeList: [],
  authorList: [],
  showScroll: false,
  showLoading: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST:
      return state.merge({
        'homeList': fromJS(action.data.articleList),
        'authorList': fromJS(action.data.users),
      });
    case constants.SPLIC_HOME_LIST:
      return state.merge({
        'homeList': state.get('homeList').concat(action.data),
        'showLoading': false,
      });
    case constants.SHOW_LOADING:
      return state.set('showLoading', true);
    case constants.CHANGE_TOP_SHOW:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}