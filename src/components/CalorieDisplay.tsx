type CalorieDisplayProps = {
    calories: number
    text: string
}
const CalorieDisplay = ({calories, text} : CalorieDisplayProps) => {
  return (
    <div className="flex-grow text-white font-bold text-center">
        <span className="font-black text-6xl text-orange">
            {calories}
        </span>
        <p>{text}</p>
    </div>
  )
}

export default CalorieDisplay