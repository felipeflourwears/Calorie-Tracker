import { useMemo } from "react"
import type { Activity } from "../types"

type CalorieTrackerProps = {
    activities: Activity[]
}


const CalorieTracker = ({activities} : CalorieTrackerProps) => {
    const caloriesConsumed = useMemo(()=> activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories: total, 0), [activities])
    const caloriesLost = useMemo(()=> activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories: total, 0), [activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">
                Resume of Calories
            </h2>
            <div className="flex flex-col md:flex-row md:justify-center gap-5 mt-10 border border-red-500 w-full">
                <div className="flex-grow text-white font-bold text-center">
                    <span className="font-black text-6xl text-orange">
                        {caloriesConsumed}
                    </span>
                    <p>Consumed</p>
                </div>
                <div className="flex-grow text-white font-bold text-center">
                    <span className="font-black text-6xl text-orange">
                        {caloriesLost}
                    </span>
                    <p>Exercise</p>
                </div>
            </div>
         </>
  )
}

export default CalorieTracker