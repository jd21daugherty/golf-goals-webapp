import StateModel from '../../../models/state';

export function changeHoleReducer(state: StateModel = {currentHole: 1}, action: any) {
    switch (action.type) {
        case 'INCREMENT_HOLE':
            return Object.assign({}, state, {
                currentHole: state.currentHole + 1
            });         
        case 'DECREMENT_HOLE':
            return Object.assign({}, state, {
                currentHole: state.currentHole - 1
            })
        default:
            return state;
    }
}