import React, { useState } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import './style.css'

function Name() {
  const [editing, setEditing] = useState(false);
  const [inputName, setInputName] = useState('Magaly Ruiz'); // get info from session storage 

  const btnClick = () => {
    setEditing( !editing )
  };

  const inputOnChange = e => {
    setInputName(e.target.value);
  }
  const onKeyDown = e => {
    if (e.key === 'Enter') {
      setEditing( !editing )
      // validar si el value no esta vacio
      // guardar el valor en session storage
    }
  }

  return (
    <React.Fragment>
      {editing
        ? <Input inputId="fullname" inputValue={inputName} inputLabel='Full Name' inputOnChange={inputOnChange} inputOnKeyDown={onKeyDown} />
        : <h1>{inputName} <Button buttonClass='btn btn-edit' buttonOnClick={btnClick} buttonLabel='&#9998;' /></h1>
      }
    </React.Fragment>

  );
}

export default Name;
