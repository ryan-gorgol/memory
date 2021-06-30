import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  });

  return (
    <GameContext.Provider value={[score, setScore]}>
      {props.children}
    </GameContext.Provider>
  );
};
