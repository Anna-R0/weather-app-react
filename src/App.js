import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Anna Ro and is
          <a
            href="https://github.com/Anna-R0/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
