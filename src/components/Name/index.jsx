import React from 'react';
import './Name.css';

function Name() {
  const [isEditing, setEditing] = React.useState(false);
  const [fullName, setFullName] = React.useState(localStorage.getItem('username') || '');
  const [temp, setTemp] = React.useState(fullName);

  React.useEffect(() => {
    localStorage.setItem('username', fullName);
  });

  function toggleEditing() {
    setEditing( !isEditing );
  };

  function cancelEditing() {
    setTemp(fullName);
    setEditing( !isEditing );
  };

  function inputOnChange(e) {
    setTemp(e.target.value);
  }

  function handleSubmit(e) {
    setFullName(temp);
  }

  if(isEditing) {
    return (
      <form>
        <div className="form-input">
          <label htmlFor="editingName">Full Name</label>
          <input
            className="fullname"
            type="text"
            id="editingName"
            autoFocus
            name="fullName"
            value={temp}
            onChange={inputOnChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>SAVE</button>
        <button type="reset" onClick={cancelEditing}>CANCEL</button>
      </form>
    )
  }
  else {
    return (
      <button className="fullname" type="button" onClick={toggleEditing}>{fullName? fullName:'Full Name'}</button>
    )
  }
}

export default Name;
