import { useState } from "react";
import FoodItem from "./FoodItem";

export default function FoodList( {foodData, setFoodId } ) {
    return(
        <div>
            {foodData.map((food) => (
                <FoodItem key={food.idMeal} food={food} setFoodId={setFoodId} />
                ))}
        </div>
    )
}