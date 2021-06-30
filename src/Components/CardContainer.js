import React, { useContext } from 'react';
import { DeckContext } from './DeckContext';
import { GameContext } from './GameContext';

function CardContainer(props, { highScore, currentScore }) {
  const [food, setFood] = useContext(DeckContext);
  const [score, setScore] = useContext(GameContext);

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

  const selectCard = (selected, foodIndex, score, setScore) => {
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

    const resetDeck = food.map((foodItem) => {
      return {
        img: foodItem.img,
        name: foodItem.name,
        selected: false,
      };
    });

    const comparedScores =
      score.currentScore >= score.highScore
        ? (score.highScore = score.currentScore)
        : // eslint-disable-next-line no-self-assign
          (score.highScore = score.highScore);
    if (selected === true) {
      alert('Memory Failure! Try again.');
      setScore({
        highScore: comparedScores,
        currentScore: 0,
      });
      setFood(resetDeck);
      shuffle(resetDeck);
    } else {
      score.currentScore++;
      setScore({
        currentScore: score.currentScore,
        highScore: comparedScores,
      });
      const shuffledFood = shuffle(newFood);
      setFood(shuffledFood);
    }
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
