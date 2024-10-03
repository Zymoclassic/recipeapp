import { useState, useEffect } from 'react';
import styles from './search.module.css';

const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export default function Search( {foodData, setFoodData} ) {

    const [ query, setQuery ] = useState("a");

    useEffect(() => {
        async function fetchFood() {
            try{
                const res = await fetch(`${URL}?f=${query}`);
                const data = await res.json();

                if (data.meals) {
                    setFoodData(data.meals);
                } else {
                    setFoodData([]); // Set empty array when no results are found
                }
            } catch (error) {
            console.error("Error fetching food data:", error);
            setFoodData([]);
            } // Handle fetch error by setting to empty array
        }  
        fetchFood();
    }, [query]);

    return(
        <div className={styles.searchBox}>
            < input className={styles.input} placeholder="search meal by first letter" value={query} onChange={(e)=>setQuery(e.target.value.slice(0, 1))} type="text" />
        </div>
    )
}

