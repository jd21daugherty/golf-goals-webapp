import { combineReducers } from 'redux';
import { changeHoleReducer } from './round-entry/reducers/change-hole.reducer';

let rootReducer: any = combineReducers({
    currentHole: changeHoleReducer
});

export default rootReducer;