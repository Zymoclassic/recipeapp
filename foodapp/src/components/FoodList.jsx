import { useState } from "react";
import FoodItem from "./FoodItem";

export default function FoodList( {foodData} ) {
    return(
        <div>
            {foodData.map((food) => (
                <FoodItem key={food.idMeal} food={food} />
                ))}
        </div>
    )
}