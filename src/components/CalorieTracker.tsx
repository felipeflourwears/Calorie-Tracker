import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}


const CalorieTracker = ({activities} : CalorieTrackerProps) => {
    const caloriesConsumed = useMemo(()=> activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories: total, 0), [activities])
    const caloriesBurn = useMemo(()=> activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories: total, 0), [activities])
    const netCalories = useMemo(()=> caloriesConsumed - caloriesBurn,[activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">
                Resume of Calories
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center gap-5 mt-10">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text='Consumed'
                />
                <CalorieDisplay
                    calories={caloriesBurn}
                    text='Exercise'
                />
                <CalorieDisplay
                    calories={netCalories}
                    text='Diferencial'
                />
            </div>
        </>
  )
}

export default CalorieTracker