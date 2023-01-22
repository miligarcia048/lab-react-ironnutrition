import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {
  return (
    <Card title={props.food.name} style={{ width: 300 }}>
      <img
        src={props.food.image}
        width={80}
        height={80}
        alt={props.food.name}
      />
      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>
      <p>Total calories: {props.food.calories} kcal</p>
      <Button
        type="primary"
        onClick={() => props.handleDeleteFood(props.food.name)}
        className="btn-delete"
      >
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
