
export function StartRoundReducer(state: any, action: any){
    switch(action.type){
        case 'START_ROUND':
            return Object.assign({}, state, {
                courseOptions: {
                    
                }
            })
    }
}