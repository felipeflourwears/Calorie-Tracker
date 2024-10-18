import { Activity } from '../src/types/index';



export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] } } |
    { type: 'restart-app' }


export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}


const localStorageActivities = (): Activity[] =>{
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState : ActivityState = {
    activities: localStorageActivities(),
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

    if(action.type === 'delete-activity'){
        
        const deletedActivity = state.activities.filter(activity => activity.id !== action.payload.id)
        return {
            ...state,
            activities: deletedActivity
        }
        
    }

    if(action.type === 'restart-app'){
        
        console.log("Reseteando app")
        return{
            activities: [],
            activeId: ''
        }
        
    }


    return state

}