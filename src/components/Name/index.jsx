import React from 'react';

function Name() {
  const [isEditing, setEditing] = React.useState(false);
  const [fullName, setFullName] = React.useState(localStorage.getItem('username') || 'Full Name');
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
        <label htmlFor="editingName">Full Name</label>
        <input type="text" id="editingName" autoFocus name="fullName" value={temp} onChange={inputOnChange} />
        <button type="submit" onClick={handleSubmit}>SAVE</button>
        <button type="reset" onClick={cancelEditing}>CANCEL</button>
      </form>
    )
  }
  else {
    return (
      <button type="button" onClick={toggleEditing}>{fullName}</button>
    )
  }
}

export default Name;
