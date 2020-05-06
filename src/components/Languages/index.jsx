import React from 'react';
import './Languages.css';

function Languages() {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('tiempodev-resume-languages')) || []);

  React.useEffect(() => {
    localStorage.setItem('tiempodev-resume-languages', JSON.stringify(list));
  });

  function AddLanguage() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [isAdding, setAdding] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: nextId, language: "", level: "Native" });

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
        <form onSubmit={handleSubmit}>
          <div className="language-form">
            <div className="language-form-input">
              <label htmlFor="addLanguage">Language</label>
              <input className="content bold" id="addLanguage" autoFocus name="language" onChange={handleChange} placeholder="e.g. Spanish" />
            </div>
            <div className="language-form-input">
              <label htmlFor="addLevel">Level</label>
              <select id="addLevel" name="level" onChange={handleChange} >
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Elementary">Elementary</option>
              </select>
            </div>
          </div>
          <button className="save" type="submit" onClick={handleSubmit}>SAVE</button>
          <button className="cancel" type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      );
    }
    else {
      return (
        <React.Fragment>
          { list.length === 0 ?
            <div onClick={toggleAdding}>
              <p className="content eg">
                <b>e.g. Spanish</b>: Native
              </p>
              <button className="add" type="button">ADD LANGUAGE</button>
            </div>
            :
            <p><button className="add" type="button" onClick={toggleAdding}>ADD LANGUAGE</button></p>
          }
        </React.Fragment>
      );
    }
  }

  function EditLanguage({ lang }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: lang.id, language: lang.language, level: lang.level });

    function toggleEditing() {
      setEditing(!isEditing);
    }

    function cancelEditing() {
      updateFormData({ id: lang.id, language: lang.language, level: lang.level });
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
        <form onSubmit={handleSubmit}>
          <div className="language-form">
            <div className="language-form-input">
              <label htmlFor="editLanguage">Language</label>
              <input className="content bold" id="editLanguage" autoFocus name="language" value={formData.language} onChange={handleEditing}/>
            </div>
            <div className="language-form-input">
              <label htmlFor="editLevel">Level</label>
              <select name="level" value={formData.level} onChange={handleEditing} >
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Elementary">Elementary</option>
              </select>
            </div>
          </div>
          <button className="save" type="submit" onClick={handleSubmit}>SAVE</button>
          <button className="cancel" type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      );
    }
    else {
      return (
        <button className="content" type="button" onClick={toggleEditing}><b>{lang.language}</b>: {lang.level}</button>
      );
    }
  }

  function RemoveLanguage({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }
    return (
      <button className="remove" type="button" onClick={handleRemove}>&times;</button>
    )
  }

  return (
    <div className={"row m mb" + (list.length>0?"":" empty")} >
      <div className="col-title">
        <h4>Language Skills</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(lang => (
            <div className="editable-content" key={lang.id}>
              <RemoveLanguage id={lang.id} />
              <EditLanguage lang={lang} />
            </div>
          ))}
        </div>
        <AddLanguage />
      </div>
    </div>
  );
}

export default Languages;
