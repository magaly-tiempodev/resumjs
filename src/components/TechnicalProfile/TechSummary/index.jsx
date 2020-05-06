import React from 'react';

function TechSummary() {
  const [isEditing, setEditing] = React.useState(false);
  const [techSummary, setTechSummary] = React.useState(localStorage.getItem('tiempodev-resume-techsummary') || '');
  const [temp, setTemp] = React.useState(techSummary);

  React.useEffect(() => {
    localStorage.setItem('tiempodev-resume-techsummary', techSummary);
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
      <ul className="editable-container">
        <li className="editable-content">
          <form onSubmit={handleSubmit}>
            <div className="profile-form-input">
              <label htmlFor="techSummary">Technology Summary</label>
              <textarea rows="4" className="content" type="text" id="techSummary" autoFocus name="temp" value={temp} onChange={inputOnChange} placeholder="e.g. JavaScript, .NET, PHP, AWS" />
            </div>
            <button className="save" type="submit" onClick={handleSubmit}>SAVE</button>
            <button className="cancel" type="reset" onClick={cancelEditing}>CANCEL</button>
          </form>
        </li>
      </ul>
    )
  }
  else {
    return (
      <button className={"content" + (techSummary?"":" eg empty")} type="button" onClick={toggleEditing}>
        <ul className="editable-container">
          <li className="editable-content">
            <b>Technology Summary:</b> {techSummary?techSummary:'e.g. JavaScript, .NET, PHP, AWS'}
          </li>
        </ul>
      </button>
    )
  }
}

export default TechSummary;
