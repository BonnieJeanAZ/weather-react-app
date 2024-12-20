import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="Main">
        <h2>React Weather App</h2>
        <Weather defaultCity="New York" />
      </header>
      <a href="https://github.com/BonnieJeanAZ/weather-react-app">
        Open-Source code
      </a>{" "}
      by Bonnie Runyan
    </div>
  );
}

export default App;
