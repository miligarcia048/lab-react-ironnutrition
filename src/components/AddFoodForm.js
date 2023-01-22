import React from 'react';
import { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  function handleNameInput(event) {
    setName(event.target.value);
  }
  function handleImageInput(event) {
    setImage(event.target.value);
  }
  function handleCaloriesInput(event) {
    setCalories(event.target.value);
  }
  function handleServingsInput(event) {
    setServings(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    props.handleAddNewFood(newFood);

    //clean form after creating the movie
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  }

  return (
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit} style={{ width: 400 }}>
        <label htmlFor="name">Name: </label>
        <Input onChange={handleNameInput} id="name" value={name} />

        <label htmlFor="image">Image: </label>
        <Input onChange={handleImageInput} id="image" value={image} />

        <label htmlFor="calories">Calories: </label>
        <Input onChange={handleCaloriesInput} id="calories" value={calories} />

        <label htmlFor="servings">Servings: </label>
        <Input onChange={handleServingsInput} id="servings" value={servings} />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
