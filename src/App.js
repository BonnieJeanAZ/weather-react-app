import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="Main">
        <h2>React Weather App</h2>
        <Weather />
      </header>
      <a href="https://github.com/BonnieJeanAZ/weather-react-app">
        Open-Source code
      </a>{" "}
      by Bonnie Runyan
    </div>
  );
}

export default App;
