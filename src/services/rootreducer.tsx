import { combineReducers } from 'redux';
import { ChangeHoleReducer } from './round-entry/reducers/change-hole.reducer';
import { StartRoundReducer } from './start-round/reducers/start-round.reducer';

let rootReducer: any = combineReducers({
    currentHoleState: ChangeHoleReducer,
    startRoundState: StartRoundReducer
});

export default rootReducer;