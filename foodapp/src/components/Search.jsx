import { useState, useEffect } from 'react';
import styles from './search.module.css';

// //api url
// const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

// export default function Search( {foodData, setFoodData} ) {

//     const [ query, setQuery ] = useState("a");
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     //For fetching data
//     useEffect(() => {

//         async function fetchFood() {
//             try{
//                 const res = await fetch(`${URL}?f=${query}`);
//                 const data = await res.json();

//                 if (data.meals) {
//                     setFoodData(data.meals);
//                 } else {
//                     setFoodData([]); // Set empty array when no results are found
//                 }
//             } catch (error) {
//             console.error("Error fetching food data:", error);
//             setFoodData([]);
//             } // Handle fetch error by setting to empty array
//         }  
//         fetchFood();
//     }, [query]);

//     return(
//         <div className={styles.searchBox}>
//             < input className={styles.input} placeholder="search meal by first letter" value={query} onChange={(e)=>setQuery(e.target.value.slice(0, 1))} type="text" />
//         </div>
//     )
// }

const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("a");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Debounce logic: Only fetch after 500ms of idle time
        const timeoutId = setTimeout(() => {
            async function fetchFood() {

                // Check if query is empty
                if (!query.trim()) {
                    setFoodData([]); // Clear results if query is empty
                    return;
                }
                setIsLoading(true);
                setError(null);
                try {
                    const res = await fetch(`${URL}?f=${query}`);
                    const data = await res.json();

                    if (data.meals) {
                        setFoodData(data.meals);
                    } else {
                        setFoodData([]); // No meals found
                    }
                } catch (err) {
                    setError("Error fetching food data");
                    setFoodData([]);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchFood();
        }, 500); // Wait 500ms after user stops typing

        // Cleanup the timeout if the component unmounts or the query changes
        return () => clearTimeout(timeoutId);
    }, [query, setFoodData]);

    return (
        <div className={styles.searchBox}>
            <input
                className={styles.input}
                placeholder="Search by first letter of meal name"
                value={query}
                onChange={(e) => setQuery(e.target.value.slice(0, 1))}
                type="text"
            />
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {foodData.length === 0 && !isLoading && !error && (
                <p>No meals found.</p>
            )}
        </div>
    );
}
