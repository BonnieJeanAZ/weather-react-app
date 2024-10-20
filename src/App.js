import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="Main">
        <h2>React Weather App</h2>
        <Weather />
      </header>
      <a href="https://github.com/BonnieJeanAZ/weather-react-app">
        Open-Source code
      </a>
      <div>by Bonnie Runyan</div>
    </div>
  );
}

export default App;
