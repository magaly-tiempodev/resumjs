import React from 'react';

function Name() {
  const [isEditing, setEditing] = React.useState(false);
  const [inputName, setInputName] = React.useState(localStorage.getItem('username') || '');

  React.useEffect(() => {
    localStorage.setItem('username', inputName);
  });

  function toggleEditing() {
    setEditing( !isEditing );
  };

  function inputOnChange(e) {
    setInputName(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key === 'Enter') {
      setEditing( !isEditing );
    }
  }

  if(isEditing) {
    return (
      <form>
        <label htmlFor="editingName">Full Name</label>
        <input type="text" id="editingName" autoFocus name="inputName" value={inputName} onChange={inputOnChange} onKeyDown={handleSubmit}/>
        <button type="submit" onClick={handleSubmit}>SAVE</button>
        <button type="reset" onClick={toggleEditing}>CANCEL</button>
      </form>
    )
  }
  else {
    return (
      <button type="button" onClick={toggleEditing}>{inputName}</button>
    )
  }
}

export default Name;
