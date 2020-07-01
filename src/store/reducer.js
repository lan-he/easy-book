import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';
import { loginReducer } from '../pages/login/store';

const reducer = combineReducers ({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer,
});

export default reducer;
