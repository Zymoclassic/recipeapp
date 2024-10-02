import { useEffect, useState } from "react";

export default function FoodInfo( { foodId } ) {

    const [foodInfo, setFoodInfo] = useState("52772");

    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}`)
            const data = await res.json()
            console.log(data)
            setFoodInfo(data.meals ? data.meals[0] : "52772" );
        }
        fetchFood()    
    }, [foodId]);

    return(
        <div>
            <h1>Food details </h1>
            <h3>{foodId}</h3>
            <h2>{foodInfo.strMeal}</h2>
            <h6>{foodInfo.strArea}</h6>
            <img src={foodInfo.strMealThumb} alt={foodInfo.strMeal} />
        </div>
    )
}

