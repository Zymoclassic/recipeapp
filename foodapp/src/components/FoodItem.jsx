import styles from './fooditem.module.css';

export default function FoodItem({ food }) {
    return(
        <div className={styles.itemBox} >
            <img className={styles.imgBox} src={food.strMealThumb} />
            <div className={styles.itemNameBox}>
                <p className={styles.itemName}>{food.strMeal}</p>
            </div>
            <div className={styles.buttonBox} >
                <button className={styles.itemButton} >View recipe</button>
            </div>           
            
        </div>
    )
}