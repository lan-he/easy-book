import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';
import { signInReducer } from '../pages/signIn/store';

const reducer = combineReducers ({
    header: headerReducer,
    home: homeReducer,
    signIn: signInReducer,
});

export default reducer;
