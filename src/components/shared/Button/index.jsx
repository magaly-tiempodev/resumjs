import React from 'react';
import './style.css';

function Button({ buttonClass, buttonOnClick, buttonLabel }) {
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={buttonOnClick}
    >
      {buttonLabel}
    </button>
  );
}

export default Button;
