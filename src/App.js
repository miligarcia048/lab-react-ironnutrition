import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/Search';
import foodsJson from './foods.json';
import { Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);
  const [showAddFood, setShowAddFood] = useState(false);
  const [emptyArray, setEmptyArray] = useState(false);

  function handleAddNewFood(newFood) {
    setFoods([newFood, ...foods]);
    setFilteredFoods([newFood, ...filteredFoods]);
  }
  function handleSearch(keyword) {
    var filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().startsWith(keyword);
    });
    setFilteredFoods(filteredFoods);
  }

  function handleDeleteFood(foodName) {
    const deletedFoods = foods.filter((food) => {
      return food.name !== foodName;
    });

    setFoods(deletedFoods);
    setFilteredFoods(deletedFoods);

    if (foods.length === 1) {
      console.log('hola');
      setEmptyArray(true);
    }
  }
  function handleShowForm() {
    setShowAddFood(!showAddFood);
  }
  return (
    <div className="App">
      {showAddFood && <AddFoodForm handleAddNewFood={handleAddNewFood} />}
      <Button onClick={handleShowForm}>
        {' '}
        {showAddFood ? 'Hide form' : ' Add new Food'}{' '}
      </Button>
      <SearchBar handleSearch={handleSearch} />
      <h1>Food list</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {emptyArray && <h2>Ops! there is no more content to show</h2>}
        {filteredFoods.map((food) => {
          return <FoodBox food={food} handleDeleteFood={handleDeleteFood} />;
        })}
      </div>
    </div>
  );
}
export default App;
