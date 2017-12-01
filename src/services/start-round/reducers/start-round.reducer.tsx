import { CourseOptionsModel } from '../actions/start-round.actions';

export function StartRoundReducer(state: CourseOptionsModel = {name: '', tee: ''}, action: any){
    switch(action.type){
        case 'START_ROUND':
            return Object.assign({}, state, {
                name: action.course.name,
                tee: action.course.tee
            });
        case 'CHANGE_COURSE':
            return Object.assign({}, state, {
                name: action.coursename
            });
        case 'CHANGE_TEE':
            return Object.assign({}, state, {
                tee: action.teelength
            });
        default: 
            return state;
    }
}