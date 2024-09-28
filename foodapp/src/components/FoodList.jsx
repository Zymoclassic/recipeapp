import { useState } from "react";

export default function FoodList( {foodData} ) {
    return(
        <div>
            {foodData.map((food) => (
                <h3>{food.title}</h3>
                ))}
        </div>
    )
}