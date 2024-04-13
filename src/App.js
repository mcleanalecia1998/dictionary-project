import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="App-header-text">
            DICTIONARY <br /> 📖
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>Coded by Alecia </small>
        </footer>
      </div>
    </div>
  );
}
