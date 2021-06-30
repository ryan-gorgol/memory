import React, { useContext } from 'react';
import { DeckContext } from './DeckContext';
import { GameContext } from './GameContext';

function CardContainer(props, { highScore, currentScore }) {
  const [food, setFood] = useContext(DeckContext);
  const [score, setScore] = useContext(GameContext);

  // variables which store key game functionality
  function comparedScores(highScore, currentScore) {
    currentScore >= highScore
      ? (highScore = currentScore)
      : (highScore = highScore);
  }

  const resetFood = food.map((foodItem) => {
    return {
      img: foodItem.img,
      name: foodItem.name,
      selected: false,
    };
  });

  function shuffle(food) {
    var m = food.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);

      t = food[m];
      food[m] = food[i];
      food[i] = t;
    }
    return food;
  }

  /* 
   selectCard function for onClick behaviour.
   */

  const selectCard = (selected, foodIndex, score, setScore, comparedScores) => {
    if (selected === true) {
      alert('Memory Failure! Try again.');
      setScore({
        currentScore: 0,
        highScore: comparedScores,
      });
      setFood(resetFood);
    } else {
      score.currentScore++;
      setScore({
        currentScore: score.currentScore,
        highScore: score.currentScore,
      });
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
    console.log(food);
  };

  return (
    <div className="CardContainer">
      {food.slice(0, 4).map(({ img, name, selected }, index) => (
        <button
          key={name}
          onClick={() => selectCard(selected, index, score, setScore)}
        >
          <img src={img} alt={name} key={name}></img>
        </button>
      ))}
    </div>
  );
}

export default CardContainer;
