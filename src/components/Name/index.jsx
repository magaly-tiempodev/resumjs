import React from 'react';
import './Name.css';

function Name() {
  const [isEditing, setEditing] = React.useState(false);
  const [fullName, setFullName] = React.useState(localStorage.getItem('tiempodev-resume-username') || '');
  const [temp, setTemp] = React.useState(fullName);

  React.useEffect(() => {
    localStorage.setItem('tiempodev-resume-username', fullName);
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
    e.preventDefault();
    setFullName(temp.trim());
    setEditing( !isEditing );
  }

  if(isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="fullname-form-input">
          <label htmlFor="editingName">Full Name</label>
          <input
            className="fullname"
            type="text"
            id="editingName"
            autoFocus
            name="fullName"
            value={temp}
            onChange={inputOnChange}
            placeholder="Name LastName" />
        </div>
        <button className="save" type="submit" onClick={handleSubmit}>SAVE</button>
        <button className="cancel" type="reset" onClick={cancelEditing}>CANCEL</button>
      </form>
    )
  }
  else {
    return (
      <button className="fullname" type="button" onClick={toggleEditing}>{fullName? fullName:'Name LastName'}</button>
    )
  }
}

export default Name;
