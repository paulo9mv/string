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

  const reverseString = (value: string) => {
    return value.split("").reverse().join("");
  }

  const textToNumbers = (value: string) => {
    const mapping = {
      'i': '1',
      'I': '1',
      'o': '0',
      'O': '0',
      'a': '4',
      'A': '4',
      'e': '3',
      'E': '3'
    } as any

    return value.split("").map(item => {
      if (mapping[item]) {
        return mapping[item];
      }
      else return item
    })
  }

  const addExtraSpace = (value: string) => {
    let text = ""
    const stringToArray = value.split("")


    for(let letter of stringToArray) {
      text += letter
      text += " "
    }

    return text
  }

  const repeatedLetters = (value: string) => {
    let text = ""
    let previous = ""
    const stringToArray = value.split("")

    for(let letter of stringToArray) {
      if (letter === " ") {
        text += previous
        text += previous
      }
      text += letter
      previous = letter
    }

    text += previous
    text += previous

    return text
  }

  const changeToAlternate = (value: string, alternate: boolean) => {
    const a  =[];

    for (var i = 0; i < value.length; i++) {
      if (i % 2 === 0) {
        a.push(alternate ? value[i].toLowerCase() : value[i].toUpperCase())
      } else {
        a.push(alternate ? value[i].toUpperCase() : value[i].toLowerCase())
      }
    }

    return a.join('');
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
        <p>
          Your text in alternated lower first case: {changeToAlternate(inputed, true)}
        </p>
        <p>
          Your text in alternated upper first case: {changeToAlternate(inputed, false)}
        </p>
        <p>
          Your text reversed: {reverseString(inputed)}
        </p>
        <p>
          Your text in letters converted to numbers: {textToNumbers(inputed)}
        </p>
        <p style={{"whiteSpace":"pre"}}>    
          Your text with an extra space per letter: {addExtraSpace(inputed)}    
        </p>
        <p>
          Your text in final letters repeated 3 times: {repeatedLetters(inputed)}
        </p>
      </header>
    </div>
  );
}

export default App;
