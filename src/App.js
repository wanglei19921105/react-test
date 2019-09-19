import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Calculator from './components/state1/calculator'
// import WelcomeDialog from './components/extends/extends'
import Lrapp from './components/extend2/extend2'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Calculator/> */}
        {/* <WelcomeDialog /> */}
        <Lrapp/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
