import { Activity } from '../src/types/index';



export type ActivityActions = {
    type: 'save-activity', payload: { newActivity: Activity }
}
//
type ActivityState = {
    activities: Activity[] 
}



export const initialState : ActivityState = {
    activities: []
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

    return state

}