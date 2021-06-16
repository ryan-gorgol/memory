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
    apple,
    avocado,
    banana,
    broccoli,
    carrot,
    cheese,
    cherries,
    doughnut,
  ]);

  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
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

  shuffle(food);

  //setState of food array without re-rendering
  useEffect(() => {
    setFood(food);
  });

  //upon selecting card, setSelected to 'true'
  const selectCard = () => {
    console.log("selected card");
    //console.log(selected);
    setSelected(true);
    console.log(selected);
  };

  return (
    <div className="CardContainer">
      <button onClick={selectCard}>
        <img src={food[0]} alt={food[0]}></img>
      </button>
      <button>
        <img src={food[1]} alt={food[1]}></img>
      </button>
      <button>
        <img src={food[2]} alt={food[2]}></img>
      </button>
      <button>
        <img src={food[3]} alt={food[4]}></img>
      </button>
    </div>
  );
}

export default CardContainer;
