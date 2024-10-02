import { useState } from 'react';
import styles from './App.css'
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/Container';
import ListContainer from './components/ListContainer';
import FoodInfo from './components/FoodInfo';



function App() {

const [ foodData, setFoodData ] = useState([]);
const [ foodId, setFoodId ] = useState([""]);

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <ListContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </ListContainer>
        <ListContainer>
          <FoodInfo foodId={foodId} />
        </ListContainer>
      </Container> 
    </div>
  )
}

export default App
