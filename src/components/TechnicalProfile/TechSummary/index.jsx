import React from 'react';

function TechSummary() {
  const [isEditing, setEditing] = React.useState(false);
  const [techSummary, setTechSummary] = React.useState(localStorage.getItem('techsummary') || '');
  const [temp, setTemp] = React.useState(techSummary);

  React.useEffect(() => {
    localStorage.setItem('techsummary', techSummary);
  });

  function toggleEditing() {
    setEditing( !isEditing );
  };

  function cancelEditing() {
    setTemp(techSummary);
    setEditing( !isEditing );
  };

  function inputOnChange(e) {
    setTemp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTechSummary(temp)
    setEditing( !isEditing );
  }

  if(isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="profile-form-input">
          <label htmlFor="techSummary">Technology Summary</label>
          <textarea rows="4" className="content" type="text" id="techSummary" autoFocus name="temp" value={temp} onChange={inputOnChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>SAVE</button>
        <button type="reset" onClick={cancelEditing}>CANCEL</button>
      </form>
    )
  }
  else {
    return (
      <button className="content" type="button" onClick={toggleEditing}><b>Technology Summary:</b> {techSummary?techSummary:'e.g. JavaScript, .NET, PHP, AWS'}</button>
    )
  }
}

export default TechSummary;
