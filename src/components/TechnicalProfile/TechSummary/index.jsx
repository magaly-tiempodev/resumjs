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
    setTechSummary(temp)
  }

  if(isEditing) {
    return (
      <form>
        <label htmlFor="techSummary">Technology Summary</label>
        <input type="text" id="techSummary" autoFocus name="temp" value={temp} onChange={inputOnChange} />
        <button type="submit" onClick={handleSubmit}>SAVE</button>
        <button type="reset" onClick={cancelEditing}>CANCEL</button>
      </form>
    )
  }
  else {
    return (
      <>
        <b>Technology Summary:</b>
        <button type="button" onClick={toggleEditing}>{techSummary}</button>
      </>
    )
  }
}

export default TechSummary;
