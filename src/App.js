import './App.css';
import NavBar from './Components/Navbar';
import CardContainer from './Components/CardContainer';
import { DeckProvider } from './Components/DeckContext';
import { GameProvider } from './Components/GameContext';

function App() {
  return (
    <DeckProvider>
      <GameProvider>
        <div className="App">
          <h1>Memory Game:</h1>
          <h2>Don't repeat your selection!</h2>

          <NavBar />
          <CardContainer />
        </div>
      </GameProvider>
    </DeckProvider>
  );
}

export default App;
