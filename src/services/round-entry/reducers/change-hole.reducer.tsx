
export function ChangeHoleReducer(state: any = {currentHole: 1}, action: any) {
    switch (action.type) {
        case 'INCREMENT_HOLE':
            return Object.assign({}, state, {
                currentHole: state.currentHole + 1
            });         
        case 'DECREMENT_HOLE':
            return Object.assign({}, state, {
                currentHole: state.currentHole - 1
            });
        default:
            return state;
    }
}