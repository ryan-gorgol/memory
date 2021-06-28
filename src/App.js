import './App.css';
import NavBar from './Components/Navbar';
import CardContainer from './Components/CardContainer';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div className="App">
      <h1>Memory Game:</h1>
      <h2>Don't repeat your selection!</h2>
      <NavBar score={score} highScore={highScore} />
      <CardContainer score={score} setScore={setScore} />
    </div>
  );
}

export default App;
