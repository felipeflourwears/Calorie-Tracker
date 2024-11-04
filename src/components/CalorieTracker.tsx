import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"




const CalorieTracker = () => {

    const { caloriesConsumed, caloriesBurn, netCalories } = useActivity()
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