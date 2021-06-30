import React, { useContext } from 'react';
import { GameContext } from './GameContext';

function NavBar(props) {
  const [score] = useContext(GameContext);
  return (
    <div className="navbar">
      <h2>Score: {score.currentScore} </h2>
      <h2>High Score: {score.highScore} </h2>
    </div>
  );
}

export default NavBar;
