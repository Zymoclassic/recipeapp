import styles from './fooditem.module.css';

export default function FoodItem({ food }) {
    return(
        <div className={styles.itemBox} >
            <img className={styles.imgBox} src={food.strMealThumb} />
            <h3>{food.strMeal}</h3>
            <button>View recipe</button>
        </div>
    )
}