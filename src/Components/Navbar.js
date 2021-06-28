import React from 'react';

function NavBar(props) {
  return (
    <div className="navbar">
      <h2>Score: {props.score} </h2>
      <h2>High Score: {props.highScore} </h2>
    </div>
  );
}

export default NavBar;
