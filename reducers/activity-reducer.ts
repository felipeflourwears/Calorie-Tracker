import { Activity } from '../src/types/index';



export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } }


export type ActivityState = {
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
        let updatedActivities: Activity[] = []
        if(state.activeId){
            console.log("Updated Activity")
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        }else{
            console.log("New Activity")
            updatedActivities = [...state.activities, action.payload.newActivity] 
        }


        return {
            ...state, // mantenemos el estado actual
            activities: updatedActivities, // añadimos la nueva actividad
            activeId: ''
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