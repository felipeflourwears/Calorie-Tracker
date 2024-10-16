import { Activity } from '../src/types/index';



export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } }


type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}



export const initialState : ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (state: ActivityState = initialState , action: ActivityActions) =>{
    if( action.type === 'save-activity' ){
        // This code manage the logic to update the state
        console.log("Desde el type de save-activity")
        console.log(action.payload.newActivity)
        return {
            ...state, // mantenemos el estado actual
            activities: [...state.activities, action.payload.newActivity] // añadimos la nueva actividad
        };
    }

    if(action.type === 'set-activeId'){
        console.log("Desde el type de set-activity")
        return{
            ...state,
            activeId: action.payload.id
        }
    }

    return state

}