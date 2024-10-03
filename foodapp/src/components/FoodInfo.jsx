import { useEffect, useState } from "react";
import styles from './foodinfo.module.css';

export default function FoodInfo({ foodId }) {
    const [foodInfo, setFoodInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                
                if (data.meals) {
                    setFoodInfo(data.meals[0]);
                    setErrorMessage(''); // Clear error message when data is valid
                } else {
                    setFoodInfo(null);
                    setErrorMessage('No food found for this ID'); // Show error message when no meal is found
                }
            } catch (error) {
                console.error("Error fetching food data:", error);
                setErrorMessage('An error occurred while fetching food data.'); // Handle fetch error
            }
        }
        fetchFood();
    }, [foodId]);

    if (errorMessage) {
        return <p>{errorMessage}</p>; // Display error message
    }

    if (!foodInfo) {
        return <p>Loading...</p>; // Handle loading state
    }

    // Extract ingredients and measurements
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = foodInfo[`strIngredient${i}`];
        const measure = foodInfo[`strMeasure${i}`];

        if (ingredient && ingredient.trim()) {
            ingredients.push({ ingredient, measure }); // Store ingredient and measure as an object
        }
    }

    return (
        <div className={styles.recipeBox} >
            <div className={styles.recipeInfo} >
                <div>
                    <h1 className={styles.recipeName}>{foodInfo.strMeal}</h1>
                    <img className={styles.recipeImg} src={foodInfo.strMealThumb} alt={foodInfo.strMeal} />
                </div>
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>{foodInfo.strArea}</strong>
                    </span>
                    <span>
                        <strong>{foodInfo.strCategory}</strong>
                    </span>
                    <span>
                        <strong>{foodInfo.strTags}</strong>
                    </span>
                </div>
            </div>
            
            <div className={styles.ingredientBox} >
                <h3>Ingredients</h3>
                    {ingredients.map((item, index) => (
                        <div key = {index} className={styles.ingredientDetails} >
                            <div className={styles.ingredientImg} >
                                <img src={`https://www.themealdb.com/images/ingredients/${item.ingredient}-Small.png`} alt={item.ingredient} />
                            </div>
                            <h6 className={styles.ingredientName} > {item.measure} {item.ingredient} </h6>
                        </div>                     
                    ))}
            </div>
            <div className={styles.recipeInstructions}>
                <h2>Instructions</h2>
                <p>{foodInfo.strInstructions}</p>
            </div>
        </div>
    );
}
