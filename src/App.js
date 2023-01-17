import './App.css';
import Button from './Components/Button';
import ClearButton from './Components/ClearButton';
import Screen from './Components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  }

  const clearInput = () => {
    setInput('');
  }

  const resultCalculated = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className='screen-container'>
          <Screen
            input={input}
          />
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={resultCalculated}>=</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="clear-container">
          <ClearButton handleClear={clearInput}>
            CE
          </ClearButton>
        </div>
        <div className="row">

        </div>
      </div>
    </div>
  );
}

export default App;
