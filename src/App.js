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
          <small>
            This project was coded by{" "}
            <a href="https://github.com/mcleanalecia1998">Alecia</a> and is{" "}
            <a href="https://github.com/mcleanalecia1998/dictionary-project">
              open sourced on Github
            </a>{" "}
            and{" "}
            <a href="https://clever-tiramisu-42286d.netlify.app/">
              hosted on Netlify
            </a>{" "}
            💜
          </small>
        </footer>
      </div>
    </div>
  );
}
