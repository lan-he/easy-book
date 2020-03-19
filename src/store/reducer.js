import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';
import { signInReducer } from '../pages/signin/store';

const reducer = combineReducers ({
    header: headerReducer,
    home: homeReducer,
    signin: signInReducer,
});

export default reducer;
