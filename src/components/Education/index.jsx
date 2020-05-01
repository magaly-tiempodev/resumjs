import React from 'react';
import './Education.css';

function Education() {
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem('tiempodev-resume-education')) || []);

  React.useEffect(() => {
    localStorage.setItem('tiempodev-resume-education', JSON.stringify(list));
  });

  function AddEducation() {
    const nextId = (list.length > 0) ? list[list.length-1].id + 1 : 0;
    const [isAdding, setAdding] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: nextId, degree: "", title: "", school: "", start: "", end: "" });

    function toggleAdding() {
      setAdding( !isAdding );
    }

    function handleChange(e) {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    }

    function handleSubmit(e) {
      e.preventDefault();
      setList( list.concat(formData) );
      setAdding( !isAdding );
    }

    if(isAdding) {
      return (
        <form onSubmit={handleSubmit}>
          <div className="education-form">
            <div className="education-form-input">
              <label htmlFor="addDegree">Degree</label>
              <input className="content bold" id="addDegree" name="degree" onChange={handleChange} />
            </div>
            <div className="education-form-text">in</div>
            <div className="education-form-input">
              <label htmlFor="addTitle">Title</label>
              <div className="education-form-format">' <input className="content" id="addTitle" name="title" onChange={handleChange} /> '</div>
            </div>
          </div>
          <div className="education-form">
            <div className="education-form-input">
              <label htmlFor="addSchool">School</label>
              <input className="content" id="addSchool" name="school" onChange={handleChange} />
            </div>
            <div className="education-form">
              <div className="education-form-text">(</div>
              <div className="education-form-input-year">
                <label htmlFor="addStart">Year Start</label>
                <input className="content" id="addStart" name="start" onChange={handleChange} />
              </div>
              <div className="education-form-text">-</div>
              <div className="education-form-input-year">
                <label htmlFor="addEnd">Year End</label>
                <input className="content" id="addEnd" name="end" onChange={handleChange} />
              </div>
              <div className="education-form-text-last">)</div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={toggleAdding}>CANCEL</button>
        </form>
      )
    }
    else {
      return (
        <React.Fragment>
          { list.length === 0 ?
            <div onClick={toggleAdding}>
              <p className="content">
                <b>e.g. Engineer Degree</b> in 'Ingeniería electrónica en computación'
                <br />CETI, Centro de Enseñanza Técnica Industrial. ( 2003 - 2007 )
              </p>
              <button className="add" type="button">ADD EDUCATION</button>
            </div>
            :
            <button className="add" type="button" onClick={toggleAdding}>ADD EDUCATION</button>
          }
        </React.Fragment>
      )
    }
  }

  function EditEducation({ education }) {
    const [isEditing, setEditing] = React.useState(false);
    const [formData, updateFormData] = React.useState({ id: education.id, degree: education.degree, title: education.title, school: education.school, start: education.start, end: education.end });

    function toggleEditing() {
      setEditing( !isEditing );
    }

    function cancelEditing() {
      updateFormData({ id: education.id, degree: education.degree, title: education.title, school: education.school, start: education.start, end: education.end });
      setEditing( !isEditing );
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
          if(item.id === education.id) {
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
          <div className="education-form">
            <div className="education-form-input">
              <label htmlFor="addDegree">Degree</label>
              <input className="content bold" id="addDegree" name="degree" value={formData.degree} onChange={handleEditing} />
            </div>
            <div className="education-form-text">in</div>
            <div className="education-form-input">
              <label htmlFor="addTitle">Title</label>
              <div className="education-form-format">' <input className="content" id="addTitle" name="title" value={formData.title} onChange={handleEditing} /> '</div>
            </div>
          </div>
          <div className="education-form">
            <div className="education-form-input">
              <label htmlFor="addSchool">School</label>
              <input className="content" id="addSchool" name="school" value={formData.school} onChange={handleEditing} />
            </div>
            <div className="education-form">
              <div className="education-form-text">(</div>
              <div className="education-form-input-year">
                <label htmlFor="addStart">Year Start</label>
                <input className="content" id="addStart" name="start" value={formData.start} onChange={handleEditing} />
              </div>
              <div className="education-form-text">-</div>
              <div className="education-form-input-year">
                <label htmlFor="addEnd">Year End</label>
                <input className="content" id="addEnd" name="end" value={formData.end} onChange={handleEditing} />
              </div>
              <div className="education-form-text-last">)</div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>SAVE</button>
          <button type="reset" onClick={cancelEditing}>CANCEL</button>
        </form>
      )
    }
    else {
      let educationDate = education.start ? education.end ? "( "+education.start+" - "+education.end+" )" : "( "+education.start+" )" : "";
      return (
        <button className="content" type="button" onClick={toggleEditing}>
          <b>{education.degree}</b> in '{education.title}'
          <br />{education.school} {educationDate}
        </button>
      )
    }
  }

  function RemoveEducation({ id }) {
    function handleRemove() {
      setList(list.filter(item => item.id !== id));
    }
    return (
      <button className="remove" type="button" onClick={handleRemove}>&times;</button>
    )
  }

  return (
    <div className="row m">
      <div className="col-title">
        <h4>Education</h4>
      </div>
      <div className="col-detail">
        <div className="editable-container">
          {list.map(education => (
            <div className="editable-content mb" key={education.id}>
              <RemoveEducation id={education.id} />
              <EditEducation education={education} />
            </div>
          ))}
        </div>
        <AddEducation />
      </div>
    </div>
  );
}

export default Education;
