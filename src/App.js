import React from 'react';
import PropTypes from "prop-types";
import { findDOMNode } from 'react-dom';

const foodILitke = [
  {
    id : 1,
    name : 'egg',
    image : 'https://image.naver.com/',
    rating : 5
  },
  {
    id : 2,
    name : 'meat',
    image : 'https://image.naver.com/',
    rating : 4.9
  },
  {
    id : 3,
    name : 'milk',
    image : 'https://image.naver.com/',
    rating : 4.3
  },
  {
    id : 4,
    name : 'apple',
    image : 'https://image.naver.com/',
    rating : 2
  }
];


function Food({ name, picture, rating }){  
  return (
  <div>
    <h3>I Love {name}</h3>
    <h4>{rating}/5.0</h4>
    <p>image link : {picture} </p>
  </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


function App() {
  return (
    <div>
      Hello!!
      {foodILitke.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}


export default App;
