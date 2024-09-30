import { useState, useEffect } from 'react';

const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export default function Search( {foodData, setFoodData} ) {

    const [ query, setQuery ] = useState("a");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?f=${query}`);
            const data = await res.json();
            setFoodData(data.meals);  
        } fetchFood()
    }, [query]);

    return(
        <div>
            < input placeholder="search meal by first letter" value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
        </div>
    )
}

