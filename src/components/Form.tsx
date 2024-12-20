import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import type { Activity } from "../types"
import { useActivity } from "../hooks/useActivity"




const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

const Form = () => {
    const { state, dispatch } = useActivity()
    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(()=>{
        if(state.activeId){
            console.log("Ya hay algo en Active ID: ", state.activeId)
            const selectedActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId])

    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        
        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

   /* const isValidActivity = useMemo(() => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0;
    }, [activity]); */

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()    
        console.log("Submit...")

      dispatch({type: "save-activity", payload:{
        newActivity: activity
      }})

      setActivity({
        ...initialState,
        id: uuidv4()
      })
    }
    


    return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={ handleSubmit }>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Category:</label>
            <select name="" id="category" value={activity.category} onChange={ handleChange } className="border-slate-300 p-2 rounded-lig w-full bg-white">
                {categories.map(category=>(
                    <option 
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">Activity:</label>
            <input 
                id="name"
                type="text"
                value={activity.name}
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ex. Food, Juice of Orange, Salad, Exercise, Weights, Bycyle" 
                onChange={ handleChange }
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calories:</label>
            <input 
                id="calories"
                type="number"
                onChange={handleChange}
                value={activity.calories}
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calories Ex. 300 or 500" 
            />
        </div>

        <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-950 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            value={activity.category == 1 ? "Kept Food" : "Kept Exercise"}
            disabled={!isValidActivity()}
        />
    </form>
  )
}

export default Form