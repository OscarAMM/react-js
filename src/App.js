//import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph';
import Variables from './components/Variables';
function App() {
  return (
    <div className="App">
      <h1>Hola, mundo</h1>
      <Paragraph />
      <Variables />
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div> 
  );
}

export default App;
