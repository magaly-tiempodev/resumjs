import React from 'react';
import './style.css'

function Input({ inputId, inputValue, inputLabel, inputOnChange, inputOnKeyDown }) {
  return (
    <div>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        id={inputId}
        type="text"
        value={inputValue}
        onChange={inputOnChange}
        onKeyDown={inputOnKeyDown}
        placeholder={inputLabel}
      />
    </div>
  );
}

export default Input;
