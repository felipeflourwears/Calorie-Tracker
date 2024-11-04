import { createContext, ReactNode, useReducer, useMemo } from "react";
import {ActivityActions, activityReducer, ActivityState, initialState } from "../../reducers/activity-reducer";
import { categories } from "../data/categories";
import { Activity } from "../types";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: React.Dispatch<ActivityActions>
    caloriesConsumed: number
    caloriesBurn: number,
    netCalories: number,
    isEmptyActivities: boolean,
    categoryName: (category: Activity['category']) => string[]
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)


    //Counters
    const caloriesConsumed = useMemo(()=> state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories: total, 0), [state.activities])
    const caloriesBurn = useMemo(()=> state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories: total, 0), [state.activities])
    const netCalories = useMemo(()=> caloriesConsumed - caloriesBurn, [state.activities])



    //Activity List
    const isEmptyActivities = useMemo(()=> state.activities.length === 0 ,[state.activities])

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [state.activities])
    
    
    return(
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurn,
            netCalories,
            categoryName,
            isEmptyActivities

        }}>
            {children}
        </ActivityContext.Provider>
    )
}