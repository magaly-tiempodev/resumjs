import React from 'react';

function Languages() {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('languages')) || []);

  React.useEffect(() => {
    localStorage.setItem('languages', JSON.stringify(list));
  });

  function AddLanguage(){
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [isAdding, setAdding] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: nextId, language: "", level: "" });

    function toggleAdding() {
      setAdding(!isAdding);
    }

    function handleChange(e) {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    }

    function handleSubmit(e) {
      e.preventDefault();
      setList(list.concat(formData));
      setAdding(!isAdding);
    }

    if(isAdding) {
      return (
        <form>
          <label htmlFor="addLanguage">Language</label>
          <input id="addLanguage" autoFocus name="language" onChange={handleChange} />

          <label htmlFor="addLevel">Level</label>
          <input id="addLevel" name="level" onChange={handleChange} />

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      );
    }
    else {
      return (
        <button type="button" onClick={toggleAdding}>ADD LANGUAGE</button>
      );
    }
  }

  function EditLanguage({ lang }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: lang.id, language: lang.language, level: lang.level });

    function toggleEditing() {
      setEditing(!isEditing);
    }

    function handleEditing(e) {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    function handleSubmit(e) {
      e.preventDefault();
      setList(
        list.map(item => {
          if(item.id === lang.id) {
            return formData;
          }
          else {
            return item;
          }
        })
      )
    }

    if(isEditing) {
      return (
        <form>
          <label htmlFor="editLanguage">Language</label>
          <input id="editLanguage" autoFocus name="language" value={formData.language} onChange={handleEditing}/>

          <label htmlFor="editLevel">Level</label>
          <input id="editLevel" name="level" value={formData.level} onChange={handleEditing}/>

          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleEditing}>CANCEL</button>
        </form>
      );
    }
    else {
      return (
        <button type="button" onClick={toggleEditing}><b>{lang.language}</b>: {lang.level}</button>
      );
    }
  }

  function RemoveLanguage({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }

    return (
      <button type="button" onClick={handleRemove}>Remove</button>
    )
  }

  return (
    <div className="row m">
      <div className="col-title">
        <h4>Language Skills</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(lang => (
            <div key={lang.id}>
              <EditLanguage lang={lang} />
              <RemoveLanguage id={lang.id} />
            </div>
          ))}
        </div>
        <AddLanguage />
      </div>
    </div>
  );
}

export default Languages;
