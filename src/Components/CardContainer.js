import React, { useState, useEffect } from "react";
import avocado from "../img/avocado.svg";
import apple from "../img/apple-1.svg";
import banana from "../img/banana.svg";
import broccoli from "../img/broccoli.svg";
import carrot from "../img/carrot.svg";
import cheese from "../img/cheese-1.svg";
import cherries from "../img/cherries.svg";
import doughnut from "../img/doughnut-1.svg";

function CardContainer(props) {
  const [food, setFood] = useState([
    { img: apple, name: "apple", selected: false },
    { img: avocado, name: "avocado", selected: false },
    { img: banana, name: "banana", selected: false },
    { img: broccoli, name: "broccoli", selected: false },
    { img: carrot, name: "carrot", selected: false },
    { img: cheese, name: "cheese", selected: false },
    { img: cherries, name: "cherries", selected: false },
    { img: doughnut, name: "doughnuts", selected: false },
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

  //setState of food array without re-rendering
  useEffect(() => {
    //  const shuffled = shuffle(food);
    console.log(food);
  }, [food]);

  //upon selecting card, setSelected to 'true'
  const selectCard = (foodIndex) => {
    const newFood = food.map((foodItem, index) => {
      if (foodIndex === index) {
        return { img: foodItem.img, name: foodItem.name, selected: true };
      } else {
        return foodItem;
      }
    });

    const shuffledFood = shuffle(newFood);
    setFood(shuffledFood);

    //check the 'selected' state of the card.
    //if 'selected' is true: game over, confirm high score.
    // if 'selected' is false: shuffle array, re-render and score++
  };

  return (
    <div className="CardContainer">
      {food.slice(0, 4).map(({ img, name }, index) => (
        <button onClick={() => selectCard(index)}>
          <img src={img} alt={name}></img>
        </button>
      ))}
    </div>
  );
}

export default CardContainer;
