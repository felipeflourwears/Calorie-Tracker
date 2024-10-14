import { useState } from "react"
import { categories } from "../data/categories"

const Form = () => {
    
    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

    
    const handleChange = (e) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }


    return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Category:</label>
            <select name="" id="category" value={activity.category} onChange={handleChange} className="border-slate-300 p-2 rounded-lig w-full bg-white">
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
                onChange={handleChange}
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
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value='Kept Food or Kept Exercise'
        />
    </form>
  )
}

export default Form