// src/components/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = (value) => {
    if (input === '0' && value !== '.') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`calculator-container ${darkMode ? 'dark' : ''}`}>
      <div className="display">{input}</div>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="dark-mode-toggle">Dark Mode</label>
      </div>
      <div className="button-grid">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')} className="operator">*</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')} className="operator">-</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')} className="operator">+</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={handleEqual} className="equal">=</button>

        <button onClick={() => handleButtonClick('0')} className="zero">0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
