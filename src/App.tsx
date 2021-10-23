import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputed, setInputed] = useState('');

  const changeToLow = (value: string) => {
    return value.toLowerCase();
  }

  const changeToUpper = (value: string) => {
    return value.toUpperCase();
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={v => setInputed(v.target.value)} value={inputed}/>
        <p>
          Your text: {inputed}
        </p>
        <p>
          Your text in lower case: {changeToLow(inputed)}
        </p>
        <p>
          Your text in upper case: {changeToUpper(inputed)}
        </p>
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
