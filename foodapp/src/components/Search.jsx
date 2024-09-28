import { useState, useEffect } from 'react';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f9badaf791184e35853d00a75477d30e";

export default function Search( {foodData, setFoodData} ) {

    const [ query, setQuery ] = useState("");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setFoodData(data.results);  
        } fetchFood()
    }, [query]);

    return(
        <div>
            < input placeholder="search" value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
        </div>
    )
}

