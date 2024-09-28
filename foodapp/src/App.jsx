import { useState } from 'react'
import Search from './components/Search'



function App() {

const [ foodData, setFoodData ] = useState([]);

  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food) => (
        <h3>{food.title}</h3>
      ))}
    </div>
  )
}

export default App
