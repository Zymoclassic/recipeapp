export default function FoodItem({ food }) {
    return(
        <div>
            <img src={food.strMealThumb} />
            <h3>{food.strMeal}</h3>
        </div>
    )
}