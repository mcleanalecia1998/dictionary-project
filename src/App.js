import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1 className="App-header-text">Mclean's Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>Coded by Alecia </small>
        </footer>
      </div>
    </div>
  );
}
