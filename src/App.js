import "./App.css";
import NavBar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";

function App() {
  return (
    <div className="App">
      <h1>Memory Game:</h1>
      <h2>Don't repeat your selection!</h2>
      <NavBar />
      <CardContainer />
    </div>
  );
}

export default App;
