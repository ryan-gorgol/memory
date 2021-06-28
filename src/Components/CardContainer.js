import React, { useState } from 'react';
import avocado from '../img/avocado.svg';
import apple from '../img/apple-1.svg';
import banana from '../img/banana.svg';
import broccoli from '../img/broccoli.svg';
import carrot from '../img/carrot.svg';
import cheese from '../img/cheese-1.svg';
import cherries from '../img/cherries.svg';
import doughnut from '../img/doughnut-1.svg';

function CardContainer(props, { setScore }) {
  const [food, setFood] = useState([
    { img: apple, name: 'apple', selected: false },
    { img: avocado, name: 'avocado', selected: false },
    { img: banana, name: 'banana', selected: false },
    { img: broccoli, name: 'broccoli', selected: false },
    { img: carrot, name: 'carrot', selected: false },
    { img: cheese, name: 'cheese', selected: false },
    { img: cherries, name: 'cherries', selected: false },
    { img: doughnut, name: 'doughnuts', selected: false },
  ]);

  //shuffle food array function
  function shuffle(food) {
    var m = food.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = food[m];
      food[m] = food[i];
      food[i] = t;
    }
    //console.log(food);
    return food;
  }

  //upon selecting card, setSelected to 'true'
  const selectCard = (selected, foodIndex) => {
    console.log(selected);

    if (selected === true) {
      alert('This card has already been chosen! Memory Failure');
    } else {
      console.log('so far so good');
    }

    const newFood = food.map((foodItem, index) => {
      if (foodIndex === index) {
        return {
          img: foodItem.img,
          name: foodItem.name,
          selected: true,
        };
      } else {
        return foodItem;
      }
    });

    const shuffledFood = shuffle(newFood);
    setFood(shuffledFood);
  };

  return (
    <div className="CardContainer">
      {food.slice(0, 4).map(({ img, name, selected }, index) => (
        <button
          onClick={() =>
            selectCard(selected, index, props.score, props.setScore)
          }
        >
          <img src={img} alt={name} key={name}></img>
        </button>
      ))}
    </div>
  );
}

export default CardContainer;
